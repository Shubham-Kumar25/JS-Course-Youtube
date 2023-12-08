const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB Calls, Cryptography, network calls

  setTimeout(function () {
    // console.log("Promise One");
    resolve();
  }, 2000);
});

promiseOne.then(function () {
  //   console.log("promise One success");
});

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Promise Two");
    resolve();
  }, 2000);
}).then(function () {
  //   console.log("promise two success");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "Lakshay", age: 23 });
  }, 1000);
});

promiseThree.then(function (user) {
  //   console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ user: "Lxy", age: 24 });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
})
  .then(function (user) {
    console.log(user);
    return user.user;
  })
  .then(function (name) {
    console.log(name);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("promise either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ name: "Shubham", email: "shubham@google.com" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();
