//reduce()

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myTotal = myNums.reduce((acc, currval) => {
  return acc + currval;
}, 0);

// console.log(myTotal);

const shoppingCart = [
  { itemName: "JS", price: 999 },
  { itemName: "PY", price: 999 },
  { itemName: "React", price: 1499 },
  { itemName: "IOS development", price: 2999 },
];

const totalCartValue = shoppingCart.reduce((acc, { price }) => {
  return acc + price;
}, 0);
console.log(totalCartValue);
