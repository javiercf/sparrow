var mongoose = require('mongoose');

var VoteSchema = new mongoose.Schema({
	user: {type: Number, ref: 'User'},
	official: {type: Number, ref: 'Official'},
	value: Number
});

module.exports = mongoose.model('Vote', VoteSchema);