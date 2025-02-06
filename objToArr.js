const objToArr = () => {
  let obj = { id: "1", name: "user22", age: "26", work: "programmer" };
  return Object.entries(obj);
};
console.log(objToArr());
