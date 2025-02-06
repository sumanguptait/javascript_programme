// Reverse an array
// let arr = [1, 2, 3, 4, 5];
// const reversedArr = arr.slice().reverse(); // Use slice to avoid mutating the original array
// console.log(reversedArr);

// Reverse an array using a loop
// const reverseArray = (arr) => {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// };
// console.log(reverseArray(arr));

//Reverse a string
const reverseStr = (str) => {
  const reversed = str.split("").reverse().join("");
  return reversed;
};

const str = "Hello";
let reversedString = reverseStr(str);
console.log(reversedString);
