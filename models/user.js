'use strict';

var mongoose = require('mongoose');

// Create Schema
// var userSchema = mongoose.Schema({
// 	username: String,
// 	password: String
// });

// Create Model
var User = mongoose.model('User', {
	name: String,
	email: String,
	favouriteBook: String,
	password: String,
	confirmpassword: String
});

module.exports = User;
