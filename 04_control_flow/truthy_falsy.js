//falsy value
//false, 0 , -0, BigInt 0n, "", null, undefined, NaN

//truthy value
// "0", 'false', " ", [], {}, function(){}

let userEmail = [];
if (userEmail.length === 0) {
  console.log("empty email");
}

let obj = {};
if (Object.keys(obj).length === 0) {
  console.log("empty object");
}

console.log(false == 0);
console.log(false == " ");
console.log(0 == "");

if ({}) {
  console.log("Check");
}

const balance = 150;

balance > 200
  ? console.log("Balance is greater than 200")
  : console.log("Balance is less than 200");
