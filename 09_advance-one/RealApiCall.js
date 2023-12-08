async function getAllUsers() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    // console.log(data);
  } catch (error) {
    // console.log(error);
  }
}
getAllUsers();

fetch("https://dummyjson.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (users) {
    console.log(users.users[0].lastName);
  })
  .catch(function (error) {
    console.log(error);
  });
