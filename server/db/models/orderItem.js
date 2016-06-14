var Sequelize = require('sequelize');

module.exports = function(db) {
    db.define('orderItem', {
        quantity: Sequelize.INTEGER
    });
};
