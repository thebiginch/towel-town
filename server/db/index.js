'use strict';
var db = require('./_db');

require('./models/user')(db);
require('./models/order')(db);

var User = require('./models/user');
var Order = require('./models/order');

User.hasMany(Order, { foreignKey : 'user_id' });
Order.belongsTo(User, { as : 'user' });

module.exports = db;
