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

app.use('/', function(req, res) {
	res.send('Hello World');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('Server running at port', port);
});