//for of loop

const arr = [1, 2, 3, 4, 5];
for (let num of arr) {
  //   console.log(num);
}

const greetings = "Welcome";
for (let greet of greetings) {
  //   console.log(greet);
}

//Map

const map = new Map();
map.set("IN", "India");
map.set("US", "America");
map.set("FR", "France");

// console.log(map);
for (const [key, value] of map) {
  //   console.log(key, value);
}

const obj = {
  id: 1,
  name: "Shubham",
};
for (const key of obj) {
  console.log(key);
}
