var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//design a user
//email -require it - trim it -set type - set min length of 1

var UserSchema = new Schema({
	
	UserName: {
		type: String,
		trim: true,
		//require: true,
		//minlength: 1
	},
	UserPsw: {
		type: String,
		trim: true
		//require : true,
		//minlength: 8
	},
	Email: {
		type: String,
		trim: true
		//require: false,
		//minlength: 1
	},
	Phone: {
		type: String,
		trim: true
		//require: true
		
	},
	IdNumber: {
		type: Number
		//default: 10000
	}
});

var User = mongoose.model('User', UserSchema);

module.exports = { User };