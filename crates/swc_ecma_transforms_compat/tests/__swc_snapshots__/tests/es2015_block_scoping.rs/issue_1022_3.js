var _loop = function(i1) {
    console.log(i1++, [
        2
    ].every(function(x) {
        return x != i1;
    }));
    if (i1 % 2 === 0) return i = i1, "break";
    i = i1, void 0;
};
for(var i = 0; i < 5; i++){
    var _ret = _loop(i);
    if (_ret === "break") break;
}
