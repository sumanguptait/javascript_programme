// a number is Positive, Negative, or Zero
const checkNumber = (num) => {
  if (num <= 0) {
    if (num == 0) {
      return "Zero";
    } else {
      return "Negative";
    }
  } else {
    return "Positive";
  }
};
const number = prompt("Enter a number: ");
const result = checkNumber(number);
console.log(`The number is ${result}.`);
