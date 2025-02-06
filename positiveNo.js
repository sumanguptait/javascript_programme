// Create a function that receives an array of numbers and returns an array containing only the positive numbers

const getPositive = (arr) => {
  let arr2 = [];
  for (el of arr) {
    if (el >= 0) {
      arr2.push(el);
    }
  }
  return arr2;
};
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let arr2 = getPositive(arr);
document.getElementById("table").innerHTML = arr2;
