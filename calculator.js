// Basic calculator
const basicCalculator = (num1, op, num2) => {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

    default:
      return "Invalid operator";
  }
};
console.log(basicCalculator(5, "+", 3)); // 8
console.log(basicCalculator(10, "-", 4)); // 6
console.log(basicCalculator(6, "*", 2)); // 12
console.log(basicCalculator(9, "/", 3)); // 3
console.log(basicCalculator(9, "/", 0)); // Error: Division by zero!
console.log(basicCalculator(5, "%", 2)); // Invalid operator!
