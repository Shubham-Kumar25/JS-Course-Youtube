let myFruits = ["aam", "santra"];

let fruitTaste = {
  aam: "Meetha",
  santra: "Khatta",

  getSantraTaste: function () {
    console.log(`Taste of Santra is: ${this.santra}`);
  },
};

// Objects.prototype.shubham = function () {
//   console.log("Shubham is present");
// };

// console.log(myFruits.shubham());
// console.log(fruitTaste.shubham());

const teacher = {
  name: "shubham",
};

const TASupport = {
  makeAssignment: "JS",
};

Object.setPrototypeOf(TASupport, teacher);
console.log(TASupport.name);
