'use strict'

// PATH FROM HOME: /api/users

var express = require('express');
var router = express.Router();
var db = require('../../db/index');
var User = db.model('user');
var Review = db.model('review');
var Order = db.model('order');

router.param('userId', function(req, res, next, id) {

    User.findById(id, {
            include: [Review, Order]
        })
        .then(function(user) {
            req.targetUser = user;
            next();
        })
        .catch(next);
});

router.get('/', function(req, res, next) {
    User.findAll()
        .then(function(users) {
            res.json(users);
        })
        .catch(next);
});

router.get('/:userId', function(req, res, next) {
    res.json(req.targetUser);
});

router.post('/', function(req, res, next) {
    User.findOrCreate({
            where: { email: req.body.email },
            defaults: { password: req.body.password }
        })
        .spread(function(user, created) {
            if (!created) {
                res.json('this user already exists!')
            } else {
                res.json(user);
            }
        })
        .catch(next);
});

router.put('/:userId', function(req, res, next) {
    req.targetUser.update(req.body)
        .then(function(updatedUser) {
            res.json(updatedUser);
        })
        .catch(next);
});

router.delete('/:userId', function(req, res, next) {
    if (req.user.isAdmin === true) {
        req.targetUser.destroy()
        .then(function() {
            res.sendStatus(204);
        })
        .catch(next);
    } else {
        var err = new Error('You must be an admin to delete a user');
        err.status = 401;
        throw err;
    }
});

router.get('/:userId/orders', function(req, res, next) {
    res.json(req.user.orders);
});

router.get('/:userId/reviews', function (req, res, next) {
    res.json(req.user.reviews);
});

module.exports = router;
