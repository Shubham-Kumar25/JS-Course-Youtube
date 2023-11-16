//for

for (let i = 1; i <= 5; i++) {
  const element = i;
  if (element == 5) {
    // console.log("best number");
  } else {
    // console.log("normal number");
  }
  //   console.log(element);
}

for (let i = 0; i <= 5; i++) {
  //   console.log(`outer loop ${i}`);
  for (let j = 0; j <= 5; j++) {
    // console.log(`inner loop ${j}`);
  }
}

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

const arr = ["aam", "angoor", "cheeku"];
// console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
  const fruit = arr[i];
  //   console.log(fruit);
}

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    // console.log("5 detected");
    break;
  }
  //   console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("5 detected");
    continue;
  }
  console.log(i);
}
