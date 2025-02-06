const sumOfThreeElements = (...elements) => {
  return new Promise((resolve, reject) => {
    if (elements.length === 3) {
      let sum = 0;
      let i = 0;
      elements.forEach((element) => {
        sum += element;
        i++;
      });
      resolve(`The sum of the three elements is ${sum}`);
    } else {
      reject("Only three elements are allowed");
    }
  });
};
sumOfThreeElements(3, 3, 3)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

sumOfThreeElements(0, 3, 4, 5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
