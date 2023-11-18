//for in loop

const obj = {
  id: 1,
  name: "Shubham",
  college: "MCM",
};

for (const key in obj) {
  //   console.log(key);
}

for (const value in obj) {
  //   console.log(obj[value]);
}

const arr = [1, 2, 3, 4, 5];

for (const nums in arr) {
  //   console.log(arr[nums]);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "America");

for (const key in map) {
  console.log(key);
}
