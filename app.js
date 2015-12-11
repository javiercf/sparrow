var express = require('express');
var app = express();
var jade = require('jade');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var expressSession = require('express-session');
var flash = require('connect-flash');
var routes = require('./routes')(passport);

app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

mongoose.connect('mongodb://localhost/sparrow', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 9001 );

var initPassport = require('./libs/passport/init');
initPassport(passport);

app.use('/', routes);


app.listen(app.get('port'), function () {
	console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});


