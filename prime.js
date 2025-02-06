// Create a function that will return a Boolean specifying if a number is prime
const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  const sqrt = Math.sqrt(num);
  for (let i = 2; i < sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(isPrime(2));
console.log(isPrime(17));
console.log(isPrime(18));

// Print the first 100 prime numbers
// const first100Primes = () => {
//   let primes = [];
//   let num = 2;
//   while (primes.length < 100) {
//     if (isPrime(num)) {
//       primes.push(num);
//     }
//     num++;
//   }
//   return primes;
// };
// console.log(first100Primes());

// Calculate the sum of first 100 prime numbers

const sumPrimes = (num) => {
  let sum = 0;
  let foundPrimes = 0;
  let i = 2;
  while (foundPrimes < num) {
    if (isPrime(i)) {
      foundPrimes++;
      sum += i;
    }
    i++;
  }
  return sum;
};
console.log("The sum of the first 100 prime numbers is:", sumPrimes(100));
