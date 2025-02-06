const highOrder = () => {
  return function () {
    return "Hello from highOrder";
  };
};
const x = highOrder();
console.log(x());
