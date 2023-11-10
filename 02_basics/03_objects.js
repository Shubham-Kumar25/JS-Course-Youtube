const mySym = Symbol("Key1");

const user = {
  name: "Lakshay",
  "full name": "Lakshay Sharma",
  age: "24",
  email: "laxsharma01@gmail.com",
  isLoggedIn: false,
  lastLoggedInDay: ["Mon", "Sat"],
  [mySym]: "myKey1",
};

// console.log(user.email);
// console.log(user["email"]);

// console.log(user["full name"]);

// console.log(user[mySym], typeof user[mySym]);

user.email = "ishubhamjnv@gmail.com";
// console.log(user.email);

// Object.freeze(user);
user.email = "laxsharma01@gmail.com";
// console.log(user);

user.greetings = function () {
  console.log("Hello User");
};
console.log(user.greetings());

user.greetingstwo = function () {
  console.log(`Hello ${this.name}`);
};
console.log(user.greetingstwo());
