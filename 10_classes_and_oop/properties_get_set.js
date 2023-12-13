//using function

function User(name, pass) {
  this._name = name;
  this._pass = pass;

  Object.defineProperty(this, "name", {
    get: function () {
      return this._name.toUpperCase();
    },

    set: function (value) {
      this._name = value;
    },
  });
}

const userOne = new User("lxy", "1234");
console.log(userOne.name);
