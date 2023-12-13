class User {
  constructor(name, pass) {
    this.name = name;
    this.pass = pass;
  }

  get name() {
    return `${this._name.toUpperCase()}`;
  }

  set name(value) {
    this._name = value;
  }
}

const userOne = new User("Shubham", "abcd");
console.log(userOne.name);
