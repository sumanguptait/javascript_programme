const divideByHalf = (sum) => {
  console.log(Math.floor(sum / 2));
};
const multiplyByTwo = (sum) => {
  console.log(sum * 2);
};
const operationOnSum = (num1, num2, operation) => {
  const sum = num1 + num2;
  operation(sum);
};
operationOnSum(3, 3, divideByHalf); // 3
operationOnSum(5, 5, multiplyByTwo); // 20
