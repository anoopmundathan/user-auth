'use strict';

function loggedOut(req, res, next) {
	if (req.session && req.session.userId) {
		return res.redirect('/profile');
	} else {
		return next();
	}
}

function requiresLogin(req, res, next) {
	if (req.session && req.session.userId) {
		return next();
	} else {
		var err = new Error('You need to Login to view this pagexxx');
		err.status = 401;
		next(err);
	}
}

module.exports.loggedOut = loggedOut;
module.exports.requiresLogin = requiresLogin;