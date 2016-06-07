'use strict'

var express = require('express');
var router = express.Router();
var db = require('../../db/index');
var Order = db.model('order');

router.get('/', function (req, res, next) {
  Order.findAll({})
  .then(function (foundOrders) {
    res.json(foundOrders);
  })
  .catch(next);
});

router.get('/:orderId', function (req, res, next) {
  Order.findById(req.params.orderId)
  .then(function (foundOrder) {
    res.json(foundOrder);
  })
  .catch(next);
});

router.post('/', function (req, res, next) {
  Order.create(req.body)
  .then(function (createdOrder) {
    res.json(createdOrder);
  })
  .catch(next);
}) 
