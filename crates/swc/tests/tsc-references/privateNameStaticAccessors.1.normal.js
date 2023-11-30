//// [privateNameStaticAccessors.ts]
import { _ as _class_static_private_field_spec_get } from "@swc/helpers/_/_class_static_private_field_spec_get";
import { _ as _class_static_private_field_spec_set } from "@swc/helpers/_/_class_static_private_field_spec_set";
class A1 {
    constructor(name){
        _class_static_private_field_spec_set(A1, A1, _prop, "");
        _class_static_private_field_spec_set(A1, A1, _roProp, ""); // Error
        console.log(_class_static_private_field_spec_get(A1, A1, _prop));
        console.log(_class_static_private_field_spec_get(A1, A1, _roProp));
    }
}
var _prop = {
    get: get_prop,
    set: set_prop
};
var _roProp = {
    get: get_roProp,
    set: void 0
};
function get_prop() {
    return "";
}
function set_prop(param) {}
function get_roProp() {
    return "";
}
