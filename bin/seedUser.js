// Creating a test dataset:

require("dotenv").config();
require("./../config/mongodb");

const UserModel = require("./../models/UserModel");

const users = [
  {
    username: "Mona",
    email: "mona@gmail.com",

    password: "1234Lisa",

    profile: "Standard",
    gender: "Woman",
    avatar: "",
  },
];

UserModel.create(users)
  .then((dbRes) => {
    console.log(dbRes);
  })
  .catch((error) => {
    console.log(error);
  });

  mongoose.connection.close();