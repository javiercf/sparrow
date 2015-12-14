var express = require('express');
var router = express.Router(),
	mongoose = require('mongoose'),
	Comment = require('../../models/Comment.js');

/* Post Comment */
router.post('/', function(req, res, next) {
	/* TODO: ADD Auth */
	Comment.create(req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* Edit Comment */
router.put('/:id', function(req, res, next) {
	Comment.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* Delete Comment */
router.delete('/:id', function(req, res, next) {
	Comment.findByIdAndRemove(req.params.id, req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});


module.exports = router;