{
} //scope

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

//nested scope

function one() {
  const name = "shubham";
  function two() {
    const website = "youtube";
  }
  //   console.log(name, two);
  two();
}
one();

if (true) {
  const username = "shubham ";
  if (username === "shubham ") {
    const website = "google";
    // console.log(username + website);
  }
  //   console.log(website);
}
// console.log(username);

console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(7));
