'use strict'

// PATH FROM HOME: /api/orders

var express = require('express');
var router = express.Router();
var db = require('../../db/index');
var Order = db.model('order');
var OrderItem = db.model('orderItem');
var Towel = db.model('towel');
var Promise = require('sequelize').Promise;
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
/*
router.post('/', function (req, res, next) {
  Order.create(req.body)
  .then(function (createdOrder) {
    res.status(201).json(createdOrder);
  })
  .catch(next);
});
*/
router.post('/', function(req, res, next) {
    var creatingOrderItems = [];
    for (var towelId in req.body.items) {
        var qty = req.body.items[towelId];
        creatingOrderItems.push(OrderItem.create({
            quantity: qty,
            towelId: towelId
        }))
    }
    Promise.all(creatingOrderItems)
    .then(function(orderItemsArray) {
      return Order.create({
        emailAddress: req.body.email,
        shippingAddress: req.body.shippingAddress,
        billingAddress: req.body.billingAddress
      })
      .tap(function(order) {
        return order.setOrderItems(orderItemsArray)
      })
      .then(function(order) {
        res.status(201).json(order);
      })
      .catch(next)
    });
});

module.exports = router;
