//// [parserAmbiguityWithBinaryOperator3.ts]
function f() {
    var a, b, c;
    if (a < b && b < c + 1) {}
}
