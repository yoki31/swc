var a = "PASS";
try {
    throw "FAIL1";
} catch (o) {
    var o = "FAIL2";
}
console.log(a);
