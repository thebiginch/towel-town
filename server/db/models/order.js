'use strict';
var Sequelize = require('sequelize');

module.exports = function (db) {
  db.define('order', {
    status: {
      type: Sequelize.ENUM('processing', 'shipped', 'cancelled','delivered'),
      defaultValue: 'processing',
      allowNull: false
    },
    // We can use Sequelize's built-in 'createdAt' instead of rolling our own
    // date property -AAOB
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
    // Should this be an association? -AAOB
    items: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: false
    },
    // Maybe make this a virtual? (Although if you do make it a virtual,
    // it would be a promise)
    // 
    // Also, consider making this an INTEGER to avoid FLOAT problems (repl
    // 0.1 + 0.2) -AAOB
    orderPrice: {
      type: Sequelize.FLOAT
    }
  },
  {
    // Always great to have instanceMethods! But are these particular ones needed? -AAOB
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
