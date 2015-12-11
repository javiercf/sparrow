var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	username: String,
	password: String,
	avatar: String
});

UserSchema.virtual('fullname').get(function(){
	return this.first_name+' '+this.last_name;
});

UserSchema.set('toJSON', {virtuals:true});

module.exports = mongoose.model('User', UserSchema);