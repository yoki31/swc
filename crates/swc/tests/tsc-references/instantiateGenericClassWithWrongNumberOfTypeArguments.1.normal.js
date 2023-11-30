//// [instantiateGenericClassWithWrongNumberOfTypeArguments.ts]
// it is always an error to provide a type argument list whose count does not match the type parameter list
// both of these attempts to construct a type is an error
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
var C = function C() {
    "use strict";
    _class_call_check(this, C);
};
var c = new C();
var D = function D() {
    "use strict";
    _class_call_check(this, D);
};
// BUG 794238
var d = new D();
