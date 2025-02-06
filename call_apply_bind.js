// call()
function saySomeThing(message) {
  return this.name + " is " + message;
}
const person1 = {
  name: "John",
};
const statement = saySomeThing.call(person1, "awesome");
console.log(statement); // John is awesome

// apply()
function saySomeThing(message) {
  return this.name + " is " + message;
}
const person2 = {
  name: "John",
};
const statement2 = saySomeThing.call(person2, ["awesome"]);
console.log(statement2);

// bind()
var bikeDetails = {
  displayDetails: function (registrationNumber, brandName) {
    return (
      this.name +
      " , " +
      "bike details: " +
      registrationNumber +
      " , " +
      brandName
    );
  },
};
var person3 = { name: "Vivek" };
var detailsOfPerson3 = bikeDetails.displayDetails.bind(
  person3,
  "TS0122",
  "Bullet"
);
console.log(detailsOfPerson3());
