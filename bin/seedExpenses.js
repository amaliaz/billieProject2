require("dotenv").config();
require("./../config/mongodb");

const mongoose = require("mongoose");
const ExpensesModel = require("./../models/ExpensesModel");

const expenses = {
  title: "Bar with friends",
  category: "Restaurants-cafes",
  amount: 25,
  date: "2019-07-15",
  description: "Pina coladas",
};

ExpensesModel.create(expenses)
  .then((dbRes) => {
    console.log(dbRes);
  })
  .catch((error) => {
    console.log(error);
  });

  mongoose.connection.close();