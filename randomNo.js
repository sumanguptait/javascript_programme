// Generate a Random Number
const randomNumberGenerator = (max, min) => {
  const a = Math.floor(Math.random() * (max - min + 1)) + min;
  return a;
};

const min = 1;
const max = 50;
console.log(randomNumberGenerator(max, min));
