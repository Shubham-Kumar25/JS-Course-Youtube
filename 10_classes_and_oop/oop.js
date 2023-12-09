const user = {
  name: "Lakshay",
  age: 24,

  getUserDetail: function () {
    // console.log(`${this.name}`);
  },
};

// console.log(user.getUserDetail());

function users(name, age) {
  this.name = name;
  this.age = age;
  return this;
}

const userOne = new users("shubham", 23);
console.log(userOne);
const userTwo = new users("Lxy", 24);
console.log(userTwo);
console.log(userOne.constructor);
