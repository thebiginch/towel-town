'use strict'

var express = require('express');
var router = express.Router();
var db = require('../../db/index');
var Towel = db.model('towel');
var Review = db.model('review');

router.param('towelId', function(req, res, next, id) {
        Towel.findById(id, {
        	include: [Review]
        })
	.then(function(towel) {
		req.towel = towel;
		next();
	})
	.catch(next);
});

router.get('/', function(req, res, next) {
	Towel.findAll()
	.then(function(towels) {
		res.json(towels);
	})
	.catch(next);
});

router.get('/:towelId', function(req, res, next) {
	res.json(req.towel);
});

module.exports = router;