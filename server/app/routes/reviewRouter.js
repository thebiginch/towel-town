'use strict'

var express = require('express');
var router = express.Router();
var db = require('../../db/index');
var Review = db.model('review');

router.get('/users/:userId', function (req, res, next) {
  Review.findAll({
    where: { 
      user_id : req.params.userid 
    }
  })
  .then(function (foundReviews) {
    if (!foundReviews) {
      res.sendStatus(404);
    } else {
      res.json(foundReviews);
    }
  })
  .catch(next);
});

router.get('/towels/:towelId', function (req, res, next) {
  Review.findAll({
    where: {
      towelId : req.params.towelId
    }
  })
  .then(function (foundReviews) {
    if (!foundReviews) {
      res.sendStatus(404);
    } else {
      res.json(foundReviews);
    } 
  }) 
  .catch(next);
});

router.post('/', function (req, res, next) {
  Review.create(req.body)
  .then(function (createdReview) {
    res.status(201).json(createdReview);
  })
  .catch(next);
});

module.exports = router;