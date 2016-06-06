'use strict';
var Sequelize = require('sequelize');

module.exports = function (db) {
  db.define('order', {
    status: {
      type: Sequelize.ENUM('processing', 'shipped', 'delivered'),
      defaultValue: 'processing',
      allowNull: false
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
    items: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: false
    },
    orderPrice: {
      type: Sequelize.FLOAT
    }
  });
};