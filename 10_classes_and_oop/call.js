function setName(name) {
  this.name = name;
}

function createUser(name, pass) {
  setName.call(this, name);
  this.pass = pass;
}

const user = new createUser("Lxy", "123abc");
console.log(user);
