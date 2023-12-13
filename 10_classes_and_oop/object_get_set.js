const user = {
  _email: "shubham@google.com",
  _pass: "abc123",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const userOne = Object.create(user);
console.log(userOne.email);
