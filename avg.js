// Calculate the average of the numbers in an array of numbers
const avgArr = (ar) => {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum / ar.length;
};
let ar = [1, 3, 9, 15, 90];
let avg = avgArr(ar);
document.getElementById("table").innerHTML = avg;
