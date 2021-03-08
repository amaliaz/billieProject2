const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: String,
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	profile: {
		type: String,
		enum: [ 'Family', 'Business', 'Student', 'Standard' ]
	},
	gender: {
		type: String,
		enum: [ 'Woman', 'Man', 'Prefer Not To' ]
	},
	avatar: {
		type: String,
		default: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
	},
	myexpense: { type: Schema.Types.ObjectId, ref: 'expenses' },
	myincome: { type: Schema.Types.ObjectId, ref: 'income' }
});

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;
