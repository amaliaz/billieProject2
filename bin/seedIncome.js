require('dotenv').config();
require('./../config/mongodb');

const IncomeModel = require('./../models/IncomeModel');

const income = {
	title: 'Salary of ',
	source: 'Main Income',
	amount: 3000,
	date: "2021-03-07",
	description: 'This is my salary',
	picture: 'https://www.travelperk.com/wp-content/uploads/Guide_Managing-business-travel-expenses.png'
};

IncomeModel.create(income)
.then((dbRes) => {
    console.log(dbRes);
})
.catch((error) => {
    console.log(error);
})

mongoose.connection.close();