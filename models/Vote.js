var mongoose = require('mongoose');

var VoteSchema = new mongoose.Schema({
	user: {type: Number, ref: 'User'},
	official: {type: Number, ref: 'Official'},
	value: Number
});

VoteSchema.methods.updateVotes = function updateVotes(cb) {
	if(this.value<0){
		this.official.meta.downVotes++;
	} else{
		this.official.meta.upVotes++;
	}
	this.official.save();
	return cb;
}

module.exports = mongoose.model('Vote', VoteSchema);