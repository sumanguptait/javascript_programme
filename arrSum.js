// Calculate the sum of numbers in an array of numbers
const sumArray = (ar) => {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
};
let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum = sumArray(ar);
document.getElementById("table").innerHTML = sum;
