'use strict';
var db = require('./_db');

require('./models/user')(db);
require('./models/order')(db);
require('./models/reviews')(db);
require('./models/towel')(db);
require('./models/orderItem')(db);

var User = db.model('user');
var Order = db.model('order');
var Review = db.model('review');
var Towel = db.model('towel');

var OrderItem = db.model('orderItem');

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);
OrderItem.belongsTo(Towel);

User.hasMany(Review, { foreignKey : 'user_id'});
Towel.hasMany(Review);
Review.belongsTo(Towel);

module.exports = db;
