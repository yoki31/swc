//// [declarationEmitThisPredicatesWithPrivateName01.ts]
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "C", {
    enumerable: !0,
    get: function() {
        return C;
    }
});
var _class_call_check = require("@swc/helpers/lib/_class_call_check.js").default, _inherits = require("@swc/helpers/lib/_inherits.js").default, _instanceof = require("@swc/helpers/lib/_instanceof.js").default, _create_super = require("@swc/helpers/lib/_create_super.js").default, C = function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
    }
    return C.prototype.m = function() {
        return _instanceof(this, D);
    }, C;
}(), D = function(C) {
    "use strict";
    _inherits(D, C);
    var _super = _create_super(D);
    function D() {
        return _class_call_check(this, D), _super.apply(this, arguments);
    }
    return D;
}(C);
