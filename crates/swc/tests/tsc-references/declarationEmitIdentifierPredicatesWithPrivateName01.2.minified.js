//// [declarationEmitIdentifierPredicatesWithPrivateName01.ts]
function f(x) {
    return "number" == typeof x.a;
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "f", {
    enumerable: !0,
    get: function() {
        return f;
    }
});
