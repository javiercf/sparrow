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
	router.get('/partials', function(req, res) {
		var name = req.params.name;
		res.render('partials/'+ name);
	});

	/* Main View */
	router.get('/', function(req, res) {
		res.render('layout', {title:'Sparrow', message:req.flash('message')});
	});

	/* Static Assets */
	router.use('/static', express.static('public'));

	return router
};