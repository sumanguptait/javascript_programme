// Calculate the sum of digits of a positive integer number
const sumOfDigits = (num) => {
  let sum = 0; // Initialize sum to store the total
  while (num > 0) {
    // Loop runs as long as num is greater than 0
    sum += num % 10; // Add the last digit of num to sum
    num = Math.floor(num / 10); // Remove the last digit
  }
  return sum; // Return the final sum of digits
};

// const sumOfDigits = (num) => {
//   let str = num.toString();
//   let sum = 0;
//   for (let char of str) {
//     sum += parseInt(char);
//   }
//   return sum;
// };
let num = 1234;
console.log(sumOfDigits(num));
