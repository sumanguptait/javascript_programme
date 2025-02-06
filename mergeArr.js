// Create a function that will merge two arrays and return the result as a new array
let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];
//concat method(old js)
// let arr = ar1.concat(ar2);

//spread method(modern js)
let arr = [...ar1, ...ar2];
console.log(arr);
