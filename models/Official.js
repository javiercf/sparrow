var mongoose = require('mongoose');

var OfficialSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	parties:[{type: mongoose.Schema.Types.ObjectId, ref: 'Party'}],
	in_office: Boolean,
	gender: String,
	bio: String
});

module.exports = mongoose.model('Official', OfficialSchema);