var express = require('express'),
	router = express.Router(),
	api = require('./api'),
	auth = require('./auth');

module.exports = function(passport){
	/* Api */
	router.use('/api', api);

	/* Auth */
	router.use('/auth', auth(passport));

	/* Angular partials */
	router.get('/partials/:name', function(req, res) {
		var name = req.params.name;
		res.render('partials/'+ name);
	});

	/* Main View */
	router.get('/', function(req, res) {
		res.render('layout', {
			title:'Sparrow', 
			message:req.flash('message'), 
			reg_message:req.flash('registration_message'),
			user: req.user
		});
	});

	/* Static Assets */
	router.use('/static', express.static('public'));

	/* Bower Assets */
	router.use('/assets', express.static('bower_components'));

	return router
};