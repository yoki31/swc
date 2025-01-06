use std::{cell::RefCell, mem::transmute};

#[derive(Default)]
pub struct MaybeScope<'a>(ScopeLike<'a>);

enum ScopeLike<'a> {
    Scope(Scope<'a>),
    Global(Option<chili::Scope<'a>>),
}

impl Default for ScopeLike<'_> {
    fn default() -> Self {
        ScopeLike::Global(None)
    }
}

impl<'a> From<Scope<'a>> for MaybeScope<'a> {
    fn from(value: Scope<'a>) -> Self {
        MaybeScope(ScopeLike::Scope(value))
    }
}

impl<'a> MaybeScope<'a> {
    #[allow(clippy::redundant_closure)]
    pub fn with<F, R>(&mut self, f: F) -> R
    where
        F: FnOnce(Scope<'a>) -> R,
    {
        let scope: &mut chili::Scope = match &mut self.0 {
            ScopeLike::Scope(scope) => unsafe {
                transmute::<&mut chili::Scope, &mut chili::Scope>(&mut scope.0)
            },
            ScopeLike::Global(global_scope) => {
                let scope = global_scope.get_or_insert_with(|| chili::Scope::global());

                unsafe { transmute::<&mut chili::Scope, &mut chili::Scope>(scope) }
            }
        };

        let scope = Scope(scope);

        f(scope)
    }
}

#[cfg(not(feature = "parallel"))]
pub struct Scope<'a>(std::marker::PhantomData<&'a ()>);

#[cfg(feature = "parallel")]
pub struct Scope<'a>(&'a mut chili::Scope<'a>);

#[inline]
pub fn join<A, B, RA, RB>(oper_a: A, oper_b: B) -> (RA, RB)
where
    A: Send + FnOnce() -> RA,
    B: Send + FnOnce() -> RB,
    RA: Send,
    RB: Send,
{
    thread_local! {
        static SCOPE: RefCell<Option<MaybeScope<'static>>> = Default::default();
    }

    let mut scope = SCOPE.take().unwrap_or_default();

    let (ra, rb) = join_maybe_scoped(
        &mut scope,
        |scope| {
            let scope = unsafe { transmute::<Scope, Scope>(scope) };
            SCOPE.set(Some(MaybeScope(ScopeLike::Scope(scope))));
            let ret = oper_a();
            SCOPE.set(None);
            ret
        },
        |scope| {
            let scope = unsafe { transmute::<Scope, Scope>(scope) };
            SCOPE.set(Some(MaybeScope(ScopeLike::Scope(scope))));
            let ret = oper_b();
            SCOPE.set(None);
            ret
        },
    );

    SCOPE.set(Some(scope));

    (ra, rb)
}

#[inline]
pub fn join_maybe_scoped<'a, A, B, RA, RB>(
    scope: &mut MaybeScope<'a>,
    oper_a: A,
    oper_b: B,
) -> (RA, RB)
where
    A: Send + FnOnce(Scope<'a>) -> RA,
    B: Send + FnOnce(Scope<'a>) -> RB,
    RA: Send,
    RB: Send,
{
    scope.with(|scope| join_scoped(scope, oper_a, oper_b))
}

#[inline]
pub fn join_scoped<'a, A, B, RA, RB>(scope: Scope<'a>, oper_a: A, oper_b: B) -> (RA, RB)
where
    A: Send + FnOnce(Scope<'a>) -> RA,
    B: Send + FnOnce(Scope<'a>) -> RB,
    RA: Send,
    RB: Send,
{
    let (ra, rb) = scope.0.join(
        |scope| {
            let scope = Scope(unsafe { transmute::<&mut chili::Scope, &mut chili::Scope>(scope) });

            oper_a(scope)
        },
        |scope| {
            let scope = Scope(unsafe { transmute::<&mut chili::Scope, &mut chili::Scope>(scope) });

            oper_b(scope)
        },
    );

    (ra, rb)
}
