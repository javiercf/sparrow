var express = require('express');
var router = express.Router(),
mongoose = require('mongoose'),
Vote = require('../../models/Vote'),
Official = require('../../models/Official');

/* UpVotes */
router.post('/upvote', function(req, res, next){
	/* Check if vote exists */
	Vote.findOne({'official':req.body.id, 'user':req.body.user_id}, function(err, vote){
		var oldVote = false, update = false;
		if(err) return handleError(err);
		/* Handle old Vote */
		if(vote){
			oldVote = true;
			if(vote.value!=1){
				vote.value = 1;
				vote.save();
				update = true;
			}
		} else{
			vote = new Vote();
			vote.official = req.body.id;
			vote.user = req.body.user_id;
			vote.value = 1;
			vote.save();
			update = true;
		}

		var opts = [
		{path:'official', model:'Official'},
		]

		Vote.populate(vote, opts, function(err, vote){
			if(update){
				vote.official.updateVotes(1, oldVote);
			}
			res.json(vote.official);
		});

	});
});

/* DownVotes */
router.post('/downvote', function(req, res, next){
	/* Check if vote exists */
	Vote.findOne({'official':req.body.id, 'user':req.body.user_id}, function(err, vote){
		var oldVote = false, update = false;
		if(err) return handleError(err);
		/* Handle old Vote */
		if(vote){
			oldVote = true;
			if(vote.value!=-1){
				vote.value = -1;
				vote.save();
				update = true;
			}
		} else{
			vote = new Vote();
			vote.official = req.body.id;
			vote.user = req.body.user_id;
			vote.value = -1;
			vote.save();
			update = true;
		}

		var opts = [
		{path:'official', model:'Official'},
		]

		Vote.populate(vote, opts, function(err, vote){
			if(update){
				vote.official.updateVotes(-1, oldVote);
			}
			res.json(vote.official);
		});

	});
});

module.exports = router;