let myDate = new Date();

// console.log(myDate, typeof myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());

let anotherDate = new Date(2023, 9, 5);
// console.log(anotherDate.toDateString());

// console.log(myDate.getTime());
// console.log(myDate.getDay());

let time = Date.now();
// console.log(time);
// console.log(Date.now());

// console.log(Date.now() / 1000);

const newDate = new Date();
console.log(newDate.getMonth());

console.log(
  `Hello, today is ${newDate.getDay()} and the time is ${Date.now().toLocaleString()}`
);

console.log(newDate.toLocaleString("en-IN"));

console.log(Date.now().toPrecision());
