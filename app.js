var express = require('express');
var app = express();
var jade = require('jade');
var api = require('./routes/api');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/sparrow', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 9001 );
app.use('/static', express.static('public'));

app.use('/api', api);

	
app.get('/', function(req, res) {
	res.render('partials/home', {title:'Sparrow'});
});


app.listen(app.get('port'), function () {
	console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});


