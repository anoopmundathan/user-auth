var express = require('express');
var app = express();

app.use('/', function(req, res) {
	res.send('Hello World');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('Server running at port', port);
});