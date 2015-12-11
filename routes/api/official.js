var express = require('express');
var router = express.Router(),
	mongoose = require('mongoose'),
	Official = require('../../models/Official.js');

/* Get Gov. Officials */
router.get('/', function(req, res, next) {
	Official.find(function(err, officials){
		if (err) return next(err);
		res.json(officials);
	});
});

/* Post Gov. Officials */
router.post('/', function(req, res, next) {
	/* TODO: ADD Auth */
	Official.create(req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* Put Gov. Officials */
router.put('/:id', function(req, res, next) {
	Official.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* Delete Gov. Officials */
router.delete('/:id', function(req, res, next) {
	Official.findByIdAndRemove(req.params.id, req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});


module.exports = router;