const name = "Lakshay";
const myRepo = 50;
console.log(name + myRepo + " Bye");

console.log(
  `Hello, my name is ${name.toUpperCase()}, and my repo count is ${myRepo}`
);

const myName = new String("Lakshay");

console.log(myName[2]);

console.log(myName.__proto__);

console.log(myName.toUpperCase());
console.log(myName.length);
console.log(myName.charAt(2));
console.log(myName.indexOf("s"));

const subStr = myName.substring(0, 5);
console.log(subStr);

const sliceStr = myName.slice(-5, 2);
console.log(sliceStr);

const newStr = "    javascript    ";
console.log(newStr.trim());

const myStr = "hello sir how are you";
console.log(myStr.replace("name", "naam"));
console.log(myStr.includes("my"));
console.log(myStr.split(" h"));
