var mongoose = require('mongoose');

var OfficialSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	parties:[{type: mongoose.Schema.Types.ObjectId, ref: 'Party'}],
	in_office: {type:Boolean, default:true},
	gender: String,
	bio: String,
	position: [String],
	meta: {
		upVotes: {type:Number, default:0},
		downVotes: {type:Number, default:0}
	}
});

OfficialSchema.virtual('fullname').get(function(){
	return this.first_name+' '+this.last_name;
});

OfficialSchema.virtual('voteCount').get(function(){
	return this.meta.upVotes - this.meta.downVotes;
});

OfficialSchema.methods.updateVotes = function updateVotes(val, old){
	if(val>0){
		this.meta.upVotes++;
		if(old){
			this.meta.downVotes--
		};
	} else{
		this.meta.downVotes++;
		if(old){
			this.meta.upVotes--
		};
	}
	return this.save();
};

OfficialSchema.set('toJSON', {virtuals:true});

module.exports = mongoose.model('Official', OfficialSchema);