function multiply(x, y) {
    return x * y;
}
console.log(multiply(5, 3));
multiply.version = "v.1.0.0";
console.log(multiply.version);

//function factor
function makeMultiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier * x;
    };
    return myFunc;
}
var multiplyby3 = makeMultiplier(3);
console.log(multiplyby3(10));