'use strict'

var express = require('express');
var router = express.Router();
var db = require('../../../db/index');
var User = db.model('user');

router.param('/:userId', function(req, res, next, id) {
	User.findById({
		where: {id: id}
	})
	.then(function(user) {
		req.user = user;
		next();
	})
	.catch(next);
});

router.get('/', function(req, res, next) {
	User.findAll({})
	.then(function(users) {
		res.json(users);
	})
	.catch(next);
});

router.get('/:userId', function(req, res, next) {
	res.json(req.user);
});

router.post('/', function(req, res, next) {
	User.create(req.body)
	.then(function(user) {
		res.json(user);
	})
	.catch(next);
});

router.put('/:userId', function(req, res, next) {
	req.user.update(req.body)
	.then(function(updatedUser) {
		res.json(updatedUser);
	})
	.catch(next);
});

router.delete('/:userId', function(req, res, next) {
	req.user.destroy()
	.then(function() {
		// res.redirect(homepage?)?
		res.sendStatus(204);
	})
	.catch(next);
});

module.exports = router;
