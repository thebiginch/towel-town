'use strict';

var Sequelize = require('sequelize');

module.exports = function (db) {
  db.define('review', {
    headline: {
      type: Sequelize.String(140),
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
        max: 10,
        min: 1
      },
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  });
};