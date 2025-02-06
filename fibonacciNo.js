// Create a function that will find the nth Fibonacci number using recursion
function fibonacciIterative(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

document.getElementById("table").innerHTML = fibonacciIterative(10);

// Create a function that will find the nth Fibonacci number using recursion
// function fibonacciRecursive(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }
// document.getElementById("table").innerHTML = fibonacciRecursive(10);
