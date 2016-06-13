'use strict';
var db = require('./_db');

require('./models/user')(db);
require('./models/order')(db);
require('./models/reviews')(db);
require('./models/towel')(db);

var User = db.model('user');
var Order = db.model('order');
var Review = db.model('review');
var Towel = db.model('towel');

User.hasMany(Order);
Order.belongsTo(User);
// Consider changing this to Order.belongsToMany(Towel) -AAOB
Order.hasMany(Towel);
// Reviews should also belong to Users, probably.
// Associations should always be two-way. -AAOB
User.hasMany(Review, { foreignKey : 'user_id'});
Towel.hasMany(Review);
Review.belongsTo(Towel);

module.exports = db;