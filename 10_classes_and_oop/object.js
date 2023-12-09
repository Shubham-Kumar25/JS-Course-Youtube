function createUser(name, marks) {
  this.name = name;
  this.marks = marks;
}

createUser.prototype.increment = function () {
  return ++this.marks;
};

createUser.prototype.printMe = function () {
  console.log(`name is: ${this.name} and marks is: ${this.marks}`);
};

const userOne = new createUser("Shubham", 89);
console.log(userOne);
console.log(userOne.printMe());
console.log(userOne.increment());
