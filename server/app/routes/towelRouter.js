'use strict'

var express = require('express');
var router = express.Router();
var db = require('../../../db/index');
var Towel = db.model('towel');

router.param('/:towelId', function(req, res, next, id) {
	User.findById({
		where: {id: id}
	})
	.then(function(towel) {
		req.towel = towel;
		next();
	})
	.catch(next);
});

router.get('/', function(req, res, next) {
	User.findAll({})
	.then(function(towels) {
		res.json(towels);
	})
	.catch(next);
});

router.get('/:id', function(req, res, next) {
	res.json(req.towel);
});

module.exports = router;