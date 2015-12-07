var express = require('express');
var app = express();
var jade = require('jade');

app.set('views', './views');
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 9001 );
app.use('/static', express.static('public'));

app.get('/', function(req, res) {
	res.render('partials/home', {title:'Sparrow'});
});

app.listen(app.get('port'), function () {
	console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});


