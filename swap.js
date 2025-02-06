// Swap Two Variable
const swap = (a, b) => {
  [a, b] = [b, a];
  return { a, b };
};

console.log(swap(3, 4)); // {a: 4, b: 3}
console.log(swap(5, 10)); // {a: 10, b: 5}
