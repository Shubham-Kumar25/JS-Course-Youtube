const tinderUserNew = new Object(); //using object constructor, singleton object
// console.log(typeof tinderUserNew);

//non-singleton object
const tinderUser = {};

tinderUser.id = 12;
// console.log(tinderUser);

const regularUser = {
  email: "ishubhamjnv@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Shubham",
      lastname: "Sharma",
    },
  },
  age: 23,
};

// console.log(regularUser);
// console.log(regularUser.fullname?.userfullname?.firstname);
// console.log(
//   typeof regularUser.fullname.userfullname.firstname,
//   typeof regularUser.fullname.userfullname
// );

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const user = [
  {
    id: 1,
    email: "lax@google.com",
    age: 23,
  },
  {
    id: 2,
    email: "lax@chatgpt.com",
    age: 33,
  },
  {
    id: 3,
    email: "lax@microsoft.com",
    age: 26,
  },
];

// console.log(user[1].email, typeof user);

// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));
// console.log(Object.entries(regularUser));

console.log(regularUser.hasOwnProperty("id"));
console.log(regularUser.hasOwnProperty("age"));
