// Implement the bubble sort algorithm for an array of numbers
let ar = [23, 1000, 1, -1, 8, 3];
const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};
const sortedArray = bubbleSort(ar);
console.log(sortedArray);
