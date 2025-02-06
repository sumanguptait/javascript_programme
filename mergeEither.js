// Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers
// that are either in the first array or second array but not in both

let ar1 = [1, 2, 3, 10, 5, 3, 14];
let ar2 = [1, 4, 5, 6, 14];

const mergeArr = () => {
  let arr = [];
  for (const num of ar1) {
    if (!ar2.includes(num)) {
      arr.push(num);
    }
  }
  for (const num of ar2) {
    if (!ar1.includes(num)) {
      arr.push(num);
    }
  }
  return arr;
};
let mergeArray = mergeArr(ar1, ar2);
console.log(mergeArray);
