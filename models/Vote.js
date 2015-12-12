var mongoose = require('mongoose'),
	Official = require('./Official');

var VoteSchema = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	official: {type: mongoose.Schema.Types.ObjectId, ref: 'Official'},
	value: Number
});

module.exports = mongoose.model('Vote', VoteSchema);