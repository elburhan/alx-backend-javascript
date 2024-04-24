import signUpUser from "./4-user-promise";

signUpUser("Bob", "Dylan")
  .then((userData) => {
    console.log(userData);
  })
  .catch((error) => {
    console.error(error);
  });
