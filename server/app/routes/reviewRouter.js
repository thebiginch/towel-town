'use strict'

// PATH FROM HOME: /api/reviews

var express = require('express');
var router = express.Router();
var db = require('../../db/index');
var Review = db.model('review');

router.post('/', function (req, res, next) {
  if (req.user) {
    req.body.user_id = req.user.id;
    Review.create(req.body)
    .then(function (createdReview) {
      res.status(201).json(createdReview);
    })
    .catch(next);
  } else {
    var err = new Error('You must be logged in to post a review');
    err.status = 401;
    throw err;
  }
});

module.exports = router;
