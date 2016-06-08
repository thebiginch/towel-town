'use strict'

var express = require('express');
var router = express.Router();
var db = require('../../db/index');
var Order = db.model('order');

router.get('/', function (req, res, next) {
  Order.findAll({})
  .then(function (foundOrders) {
    if (!foundOrders) {
      res.sendStatus(404);
    } else {
      res.json(foundOrders);
    }
  })
  .catch(next);
});

router.get('/:orderId', function (req, res, next) {
  Order.findById(req.params.orderId)
  .then(function (foundOrder) {
    if (!foundOrder) {
      res.sendStatus(404);
    } else {
      res.json(foundOrder);
   }
  })
  .catch(next);
});

router.post('/', function (req, res, next) {
  Order.create(req.body)
  .then(function (createdOrder) {
    res.status(201).json(createdOrder);
  })
  .catch(next);
}) 

module.exports = router;
