const outer = () => {
  let count = 0;
  const inner = () => {
    count++;
    return count;
  };
  return inner;
};
const counter = outer();
console.log(counter()); // 1
