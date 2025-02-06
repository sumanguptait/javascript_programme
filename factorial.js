// JavaScript Program to Find the Factorial of a Number
const number = parseInt(prompt("Enter a positive integer: "));
const factorial = (number) => {
  if (number < 0) {
    return "Error! Factorial for negative number does not exist.";
  }
  let f = 1;
  for (let i = 1; i <= number; i++) {
    f *= i;
  }
  return f;
};
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);
