var express = require('express');
var User = require('../models/user');

var router = express.Router();

// GET / - Homepage
router.get('/', function(req, res, next) {
	res.render('index');
	// User.find({}, function(err, users) {
	// 	res.json(users);
	// });
});

// GET /about - the About us page
router.get('/about', function(req, res, next) {
	res.render('about');
});

// GET /contact - the Contact us page
router.get('/contact', function(req, res, next) {
	res.render('contact');
});

router.get('/login', function(req, res, next) {
	// res.render('login');
	// res.send('login');
	res.render('login');
});

router.post('/login', function(req, res, next) {

	User.create(req.body, function(err, user) {
		res.json(user);
	});

	// var user = new User(req.body);
	// user.save(function(err, user) {
	// 	if(err) return next(err);
	// 	res.status(201);
	// 	res.json(user);
	// });
});

router.get('/profile', function(req, res, next) {
	res.send('profile');
});

// GET /register - the Sign Up form
router.get('/register', function(req, res, next) {
	res.render('register');
});

// POST /register - Sign Up form
router.post('/register', function(req, res, next) {
	//All fiels are there
	if(req.body.name &&
	   req.body.email &&
	   req.body.favoriteBook &&
	   req.body.password &&
	   req.body.confirmPassword) {

		// Confirm password checking
		if(req.body.password !== req.body.confirmPassword) {
			var err = new Error('Password not matching');
			res.status(400);
			return next(err);
		} 

   		//Save to database
		User.create(req.body, function(err, user) {
			if(err) {
				return next(err);
			} else {
				res.redirect('/profile');
			}
		});
	
	} else {
		var err = new Error('All fields are required');
		res.status(400);
		return next(err);
	}	
});

module.exports = router;