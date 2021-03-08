const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
	title: String,
	source: {
		type: String,
		enum: [ 'Main Income', 'Secondary Income', 'Other' ]
	},
	amount: Number,
	date: Date,
	description: String,
	picture: {
		type: String,
		default: 'https://www.travelperk.com/wp-content/uploads/Guide_Managing-business-travel-expenses.png'
	}
});

const IncomeModel = mongoose.model('income', IncomeSchema);
module.exports = IncomeModel;
