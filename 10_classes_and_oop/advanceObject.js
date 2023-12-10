const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const user = {
  name: "shubham",
  age: 24,

  logMe: function () {
    console.log("Logged Me");
  },
};

Object.defineProperty(user, "name", {
  writable: false,
  enumerable: false,
});

user.name = "lxy";

console.log(Object.getOwnPropertyDescriptor(user, "name"));

for (let [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}
