// function myName() {
//      console.log("shubham");
// }
// myName();
// myName;

function add(num1, num2) {
  return num1 + num2;
}
let result = add(4, 8);
// console.log(result);

function loginUserMessage(userName = "Lxy") {
  if (!userName) {
    // console.log("please enter valid userName");
    return;
  } else {
    // console.log("Hello", userName);
  }
}

// loginUserMessage();

function calculateCartPrice(...num1) {
  return num1;
}
// console.log(calculateCartPrice(100, 200, 300, 400));

const user = {
  id: 1,
  name: "shubham",
  age: 23,
};

function handleObject(anyObject) {
  //   console.log(`Welcome, ${anyObject.name} `);
}
handleObject(user);

const arr = [20, 30, 40];

function handleArr(getArr) {
  console.log(getArr[1]);
}
handleArr(arr);
