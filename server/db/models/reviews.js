'use strict';

var Sequelize = require('sequelize');

module.exports = function (db) {
  db.define('review', {
    name: {
      type: Sequelize.STRING(140),
      allowNull: true
    },
    headline: {
      type: Sequelize.STRING(140),
      allowNull: false
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
    rating: {
      type: Sequelize.INTEGER,
      validate: {
        max: 5,
        min: 0
      },
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  });
};