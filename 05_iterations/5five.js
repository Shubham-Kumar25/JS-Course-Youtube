//for each loop

const fruit = ["angoor", "aam", "cheeku", "ananas"];

fruit.forEach(function (item) {
  //   console.log(item);
});

function printMe(item) {
  //   console.log(item);
}
fruit.forEach(printMe);

fruit.forEach((index, item, arr) => {
  //   console.log(index, item, arr);
});

const myCoding = [
  {
    name: "JS",
    fullName: "JavaScript",
  },
  {
    name: "CPP",
    fullName: "C plus plus",
  },
  {
    name: "PY",
    fullName: "Python",
  },
];

myCoding.forEach((obj) => {
  console.log(
    `the name of language is: ${obj.name} and the fullname is ${obj.fullName}`
  );
});
