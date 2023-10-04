const score = 66;
// console.log(score, typeof score);

const balance = new Number(698989.876);
console.log(balance, typeof balance);

console.log(Math, typeof Math);

console.log(typeof balance.toString());
console.log(balance.toFixed(2));
console.log(balance.toPrecision(8));

const myBalance = 1000000000;
console.log(myBalance.toLocaleString("en-IN"));

console.log(Math.abs(-5));
console.log(Math.floor(5.7867));
console.log(Math.ceil(7.287));
console.log(Math.round(4.4));

console.log(Math.min(7, 6, 3, 5, 8, 5, 4));
console.log(Math.max(9, 66, 5, 43, 8));

console.log(Math.random());
console.log(Math.floor(Math.random()));
console.log(Math.random() * 10);

console.log(Math.floor(Math.random()) * 10);
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
