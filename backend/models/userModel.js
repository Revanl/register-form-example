const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		fullName: {
			type: String,
			require: [true, 'Please add a full name'],
		},
		email: {
			type: String,
			required: [true, 'Please add an email'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
		},
    confirmPassword: {
			type: String,
			require: [true, 'Please confirm your password'],
		},
    gender: {
			type: String,
			require: [true, 'Please select your gender'],
		},
    color: {
			type: String,
			require: [true, 'Please pick a favorite color'],
		},
    dateOfBirth: {
			type: String,
			require: [true, 'Please pick a date of birth'],
		},
    dateOfBirth2: {
			type: String,
			require: [true, 'Please pick a date and time of birth'],
		},		
    postCode: {
			type: String,
			require: [true, 'Please add a post code'],
		},
    phone: {
			type: String,
			require: [true, 'Please add a phone number'],
		},
    range: {
			type: String,
			require: [true, 'Please set a salary range'],
		},
    homepage: {
			type: String,
			require: [true, 'Please add a homepage'],
		},
    accessories: {
			type: String,
			require: [true, 'Please select a job position'],
		},
    additionalInformations: {
			type: String,
			require: [true, 'Please add some additioonal information'],
		},
    fileImg: {
			type: String,
			require: [true, 'Please select a profile image'],
		},
	}
);

module.exports = mongoose.model('User', userSchema);