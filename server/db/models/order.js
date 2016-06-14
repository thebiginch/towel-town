'use strict';
var Sequelize = require('sequelize');

module.exports = function (db) {
  db.define('order', {
    status: {
      type: Sequelize.ENUM('processing', 'shipped', 'cancelled','delivered'),
      defaultValue: 'processing',
      allowNull: false
    },
    shippingAddress: {
      type: Sequelize.STRING,
      allowNull: false,
      validation: {
          notEmpty: true
      }
    },
    emailAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        validation: {
            notEmpty: true,
            isEmail: true
        }
    }
  });
};
