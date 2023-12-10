class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static showAge() {
    console.log(`Age is: ${this.age}`);
  }
}

const userOne = new User("Shiv", 32);
userOne.showAge();
