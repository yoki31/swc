import _class_check_private_static_access from "./_class_check_private_static_access.mjs";
export default function _class_static_private_method_get(receiver, classConstructor, method) {
    _class_check_private_static_access(receiver, classConstructor);
    return method;
}
