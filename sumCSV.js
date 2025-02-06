// Calculate the sum of numbers received in a comma delimited string

const sumCSV = (s) => {
  let arr = s.split(",");
  let sum = 0;
  for (let n of arr) {
    sum += parseFloat(n);
  }
  return sum;
};
const numbers = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
const sum = sumCSV(numbers);
console.log(sum);
