// Rotate an array to the left 1 position
// const rotateLeft = (arr) => {
//   let firstElement = arr.shift(); // Remove the first element
//   arr.push(firstElement); //Add it to the end of the array
//   return arr;
// };

// Rotate an array to the right 1 position
const rotateRight = (arr) => {
  let lastElement = arr.pop(); // Remove the last element
  arr.unshift(lastElement); // Add it to the beginning of the array
  return arr;
};
let arr = [1, 2, 3, 4, 5];
// let leftRotatedArr = rotateLeft(arr);
let rightRotatedArr = rotateRight(arr);
// console.log(leftRotatedArr);
console.log(rightRotatedArr);
