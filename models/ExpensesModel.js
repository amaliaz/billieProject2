const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpensesSchema = new Schema({
	title: String,
	category: {
		type: String,
		enum: [
			'Housing',
			'Health',
			'Transportation',
			'Groceries',
			'Shopping',
			'Car',
			'Holidays',
			'Accomodation',
			'School',
			'Social Activities',
			'Restaurants-cafes',
			'Subscriptions',
			'Other'
		]
	},
	amount: Number,
	date: Date,
	description: String,
	picture: {
		type: String,
		default: 'https://www.travelperk.com/wp-content/uploads/Guide_Managing-business-travel-expenses.png'
	}
});

const ExpensesModel = mongoose.model('expenses', ExpensesSchema);
module.exports = ExpensesModel;

// [{type: Schema.Types.ObjectId, ref: "UserModel"}]
