class User {
  constructor(name) {
    this.name = name;
  }

  logMe() {
    return `Name is: ${this.name}`;
  }
}

class Teacher extends User {
  constructor(name, pass) {
    super(name);
    this.pass = pass;
  }

  addCourse() {
    console.log(`Course is added by ${this.name}`);
  }
}

const TeacherOne = new Teacher("shubham", "12345");
console.log(TeacherOne.addCourse());
console.log(TeacherOne.logMe());

const userOne = new User("Lakshay");
console.log(userOne.logMe());

console.log(TeacherOne instanceof User);
