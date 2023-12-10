class user {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
}

const userOne = new user("Lakshay", "1234");
console.log(userOne.encryptPassword());

function user(name, pass) {
  this.name = name;
  this.pass = pass;
}

user.prototype.encryptPassword = function () {
  return `${this.pass}xyz`;
};

const userTwo = new user("Shubham", "2508");
console.log(userTwo.encryptPassword());
