//// [privateNameClassExpressionLoop.ts]
import { _ as _class_private_field_init } from "@swc/helpers/_/_class_private_field_init";
import { _ as _class_private_field_set } from "@swc/helpers/_/_class_private_field_set";
import { _ as _class_private_method_init } from "@swc/helpers/_/_class_private_method_init";
const array = [];
for(let i = 0; i < 10; ++i){
    var _myField, _method, _accessor, _C;
    array.push((_myField = /*#__PURE__*/ new WeakMap(), _method = /*#__PURE__*/ new WeakSet(), _accessor = /*#__PURE__*/ new WeakMap(), _C = class C {
        constructor(){
            _class_private_method_init(this, _method);
            _class_private_field_init(this, _accessor, {
                get: get_accessor,
                set: set_accessor
            });
            _class_private_field_init(this, _myField, {
                writable: true,
                value: void 0
            });
            _class_private_field_set(this, _myField, "hello");
        }
    }, _C));
    function method() {}
    function get_accessor() {
        return 42;
    }
    function set_accessor(val) {}
}
