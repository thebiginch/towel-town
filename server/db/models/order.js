'use strict';
var Sequelize = require('sequelize');

module.exports = function (db) {
  db.define('order', {
    status: {
      type: Sequelize.ENUM('processing', 'shipped', 'cancelled','delivered'),
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
  },
  {
    instanceMethods: {
      changeStatus: function(status) {
          this.status = status;
      },
      addItem: function(productId) {
          this.items.push(productId);
      },
      removeItem: function(productId) {
          var index = this.items.indexOf(productId);
          this.items.splice(index, 1);
      }
    }
  });
};
