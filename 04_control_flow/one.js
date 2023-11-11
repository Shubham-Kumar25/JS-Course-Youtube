//if

if (true) {
  console.log("Hello");
}

let temp = 40;

if (temp < 45) {
  console.log("Temperature is less then 45");
} else {
  console.log("Temperature is greater than 45");
}

if (2 != 3) {
  console.log("Hello sir");
}

const score = 200;

if (score > 200) {
  const power = "fly";
  console.log(`user has power: ${power}`);
} else if (score == 200) {
  const power = "fire";
  console.log(`user has power: ${power}`);
}

const isLoggedIn = true;
const isDebitCard = true;
const isGoogleLoggedIn = true;
const isEmailLoggedIn = false;

if (isLoggedIn && isDebitCard && isGoogleLoggedIn) {
  console.log("user is logged in with google and have debit card");
} else if (isLoggedIn && isDebitCard && isEmailLoggedIn) {
  console.log("user is logged in with email and have debit card");
} else console.log("user is not logged in");

if (isGoogleLoggedIn || isEmailLoggedIn) {
  console.log("user is logged in");
} else {
  console.log("user is not logged in");
}

const balance = 250;

if (balance < 100) {
  console.log("Balance is less than 100");
} else if (balance < 150) {
  console.log("Balance is less than 150");
} else if (balance < 200) {
  console.log("Balance is less than 200");
} else console.log("Balance is greater than 200");

let val1;
val1 = 5 ?? 10;
console.log(val1);
val1 = null ?? 20;
console.log(val1);
val1 = undefined ?? 15;
console.log(val1);
