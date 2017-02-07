var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Parse Incoming Requests
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// Serve static files from /public
app.use(express.static(__dirname + '/public'));

// View Engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

var routes = require('./routes/index');
app.use('/', routes);

// Error Handling
app.use(function(req, res, next) {
	var err = new Error('File Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next) {
	res.status = err.status || 500;
	res.render('error', {
		message: err.message,
		error: {}
	});

});
var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('Server running at port', port);
});