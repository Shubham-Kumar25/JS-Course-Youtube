const arr1 = ["a", "b", "c", "d"];
const arr2 = ["e", "f"];

arr1.push(arr2);
console.log(arr1, typeof arr1);
console.log(arr1[4][1]);

const res2 = arr1.concat(arr2);
console.log(res2, typeof res2);

const res3 = [...arr1, ...arr2];
console.log(res3, typeof res3);

const arr3 = [1, 2, 3, [4, 5, [6, 7], 8], 9];
const res4 = arr3.flat(Infinity);
console.log(res4);

console.log(Array.isArray([1, 2, 3]));
console.log(Array.from("hello"));

console.log(Array.from({ name: "Lakshay", age: 22, class: "MSc" }));

let s1 = 100;
let s2 = "hello";
let s3 = true;

console.log(Array.of(s1, s2, s3));
