var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	text: String,
	veted: {type:Boolean, default:false},
	published: {type:Boolean, default:true},
	pubDate: {type:Date, default:}
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	official: {type: mongoose.Schema.Types.ObjectId, ref: 'Official'},
	in_reply: {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'},
	meta: {
		upVotes: {type:Number, default:0},
		downVotes: {type:Number, default:0}
	}
});

CommentSchema.virtual('voteCount').get(function(){
	return this.meta.upVotes - this.meta.downVotes;
});

CommentSchema.methods.updateVotes = function updateVotes(val, old){
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

CommentSchema.set('toJSON', {virtuals:true});

module.exports = mongoose.model('Comment', CommentSchema);