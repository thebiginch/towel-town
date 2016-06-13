'use strict'

// PATH FROM HOME: /api/reviews

var express = require('express');
var router = express.Router();
var db = require('../../db/index');
var Review = db.model('review');

// Maybe move this into the user router 
// OR move these routes into other routes
// and delete the router entirely -AAOB
router.get('/users/:userId', function (req, res, next) {
  
  Review.findAll({
    where: { 
      user_id : req.params.userId 
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

// Towel router? -AAOB
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
