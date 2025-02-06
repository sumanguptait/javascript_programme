function multiply(a, b) {
  return a * b;
}
function currying(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}
const multiplyCurrying = currying(multiply);
console.log(multiplyCurrying(2)(3)); // 6
