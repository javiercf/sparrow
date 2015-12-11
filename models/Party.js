var mongoose = require('mongoose');

var PartySchema = new mongoose.Schema({
	name: String,
	created_at: Date,
	description: String,
	logo: String
});

PartySchema.methods.getPartyMembers = function getPartyMembers(cb) {
	return this.model('Official').find({party:this});
}

module.exports = mongoose.model('Party', PartySchema);