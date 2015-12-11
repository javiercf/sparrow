var mongoose = require('mongoose');

var OfficialSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	parties:[{type: mongoose.Schema.Types.ObjectId, ref: 'Party'}],
	in_office: Boolean,
	gender: String,
	bio: String,
	position: [String],
	meta: {
		upVotes: Number,
		downVotes: Number
	}
});

OfficialSchema.virtual('fullname').get(function(){
	return this.first_name+' '+this.last_name;
});

OfficialSchema.set('toJSON', {virtuals:true});

module.exports = mongoose.model('Official', OfficialSchema);