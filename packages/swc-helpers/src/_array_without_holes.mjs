import _array_like_to_array from "./_array_like_to_array.mjs";
export default function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
