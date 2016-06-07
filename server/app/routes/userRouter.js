'use strict'

var express = require('express');
var router = express.Router();
var db = require('../../../db/index');
var User = db.model('User');

router.param('/:userid', function(req, res, next, id) {
	User.findById({
		where: {id: id}
	})
	.then(function(user) {
		req.user = user;
		next();
	})
	.catch(next);

})

router.get('/', function(req, res, next) {

});

module.exports = router;