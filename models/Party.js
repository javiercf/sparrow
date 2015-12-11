var mongoose = require('mongoose');

var PartySchema = new mongoose.Schema({
	name: String,
	created_at: Date,
	description: String,
	logo: String
});

module.exports = mongoose.model('Party', PartySchema);