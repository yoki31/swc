(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports, require("foo"));
    else if (typeof define === "function" && define.amd) define([
        "exports",
        "foo"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.input = {}, global.foo);
})(this, function(exports, _foo) {
    "use strict";
    Object.defineProperty(exports, "default", {
        enumerable: true,
        get: function() {
            return _foo.default;
        }
    });
});
