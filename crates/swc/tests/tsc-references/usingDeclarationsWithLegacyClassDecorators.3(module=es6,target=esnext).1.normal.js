//// [usingDeclarationsWithLegacyClassDecorators.3.ts]
import { _ as _ts_decorate } from "@swc/helpers/_/_ts_decorate";
import { _ as _using_ctx } from "@swc/helpers/_/_using_ctx";
export { C as default };
try {
    var _usingCtx = _using_ctx();
    var before = _usingCtx.u(null);
    var C = class C {
    };
    C = _ts_decorate([
        dec
    ], C);
} catch (_) {
    _usingCtx.e = _;
} finally{
    _usingCtx.d();
}
