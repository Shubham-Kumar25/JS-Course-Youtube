const user = {
  username: "Shubham",
  price: 999,
  welcomeMessage: function () {
    // console.log(`Welcome, ${this.username}`);
    // console.log(this);
  },
};

// console.log(this);

user.welcomeMessage();
user.username = "Lakshay";
user.welcomeMessage();

// function chai() {
//   let username = "Shubham";
//   console.log(this.username);
// }
// console.log(this);
// chai();

const chai = () => {
  let username = "shubham";
  //   console.log(this);
};
chai();

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(4, 6));

const obj = () => ({ name: "Lakshay" });
console.log(obj());
