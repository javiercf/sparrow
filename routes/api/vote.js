var express = require('express');
var router = express.Router(),
	mongoose = require('mongoose'),
	Vote = require('../../models/Vote'),
	Official = require('../../models/Official');

/* UpVotes */
router.post('/upvote/:id', function(req, res, next){
	/* Check if vote exists */
	Vote.findOne({'official':req.params.id, 'user':req.user.id}, function(err, vote){
		if(err) return next(err);
		if(vote){
			if(vote.value == 1) return done();
			vote.value = 1;
			vote.save();
		} else{
			var vote = new Vote();
			vote.official = req.params.id;
			vote.user = req.user.id;
			vote.value = 1;
			vote.save(function(err) {
				if (err){
					console.log(err);
					throw err;
				}
				return done(null, vote);
			});
		}

	});
});

/* DownVotes */
router.post('/downvote/:id', function(req, res, next){

});