'use strict';
var db = require('./_db');

require('./models/user')(db);
require('./models/order')(db);
require('./models/reviews')(db);
require('./models/towel')(db);
require('./models/order_towels')(db);


var User = db.model('user');
var Order = db.model('order');
var Review = db.model('review');
var Towel = db.model('towel');
var order_towels = db.model('order_towels');

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Towel, {through: order_towels});
Towel.belongsToMany(Order, {through: order_towels});

User.hasMany(Review, { foreignKey : 'user_id'});
Towel.hasMany(Review);
Review.belongsTo(Towel);

module.exports = db;