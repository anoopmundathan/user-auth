var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index');
});

router.get('/about', function(req, res, next) {
	res.render('about');
});

router.get('/contact', function(req, res, next) {
	res.render('contact');
});

router.get('/login', function(req, res, next) {
	// res.render('login');
	res.send('login');
});

router.get('/profile', function(req, res, next) {
	res.send('profile');
});

router.get('/register', function(req, res, next) {
	res.send('register');
});

module.exports = router;