'use strict';

var Sequelize = require('sequelize');

module.exports = function (db) {
  db.define('review', {
    // Maybe make the 'name' something from the user association? -AAOB
    name: {
      type: Sequelize.STRING(140),
      allowNull: true
    },
    headline: {
      // If you want this to not be an empty string, you could
      // also add a validator for notEmpty -AAOB
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
      // See notEmpty note above -AAOB
      type: Sequelize.TEXT,
      allowNull: false
    }
  });
};