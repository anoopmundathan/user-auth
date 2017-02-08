var express = require('express');
var User = require('../models/user');

var router = express.Router();

// GET / - Homepage
router.get('/', function(req, res, next) {
	res.render('index');
});

// GET /about - the About us page
router.get('/about', function(req, res, next) {
	res.render('about');
});

// GET /contact - the Contact us page
router.get('/contact', function(req, res, next) {
	res.render('contact');
});

// GET /login - Login request
router.get('/login', function(req, res, next) {
	res.render('login', { title: 'Login'});
});

// POST /login - Validate Login 
router.post('/login', function(req, res, next) {
	if(req.body.email && req.body.password) {

		User.authenticate(req.body.email, req.body.password, function(errMessage, user) {

			if(errMessage || !user) {
				var err = new Error('Wrong email or Password');
				err.status = 401;
				next(err);
			}

			req.session.userId = user._id;
			res.redirect('/profile');

		});

	} else {
		var err = new Error('Enter all fields');
		err.status = 401;
		next(err);
	}
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