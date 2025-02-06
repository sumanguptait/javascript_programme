class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  greet() {
    return `Hello,my name is ${this.name} and I am ${this.age} years old`;
  }
}
const person1 = new Person("John", 76, "male");
console.log(person1.greet());
const person2 = new Person("Seema", 23, "female");
console.log(person2.greet());
