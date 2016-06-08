var sinon = require('sinon');
var expect = require('chai').expect;

var Sequelize = require('sequelize');
var dbURI = 'postgres://localhost:5432/testing-fsg';
var db = new Sequelize(dbURI, {
    logging: false
});

require('../../../server/db/models/order')(db);

var Order = db.model('order');

describe('Order model', function () {

    beforeEach('Sync DB', function () {
       return db.sync({ force: true });
    });

    describe('Updating a order', function () {

        var order;
        beforeEach(function () {
            order = Order.build({ items: [1, 2, 3, 4, 5] });
        });
  
        it('a newly created order has pending status', function () {
            expect(order.status).to.equal('processing');
        });

        it('have a function that changes order status', function () {
            expect(order.status).to.equal('processing');
            order.changeStatus('shipped')
            expect(order.status).to.equal('shipped');
            order.changeStatus('delivered')
            expect(order.status).to.equal('delivered');
        });
        
        it('have a add item function', function () {
            order.addItem(6);
            expect(order.items.length).to.equal(6);
        });
        
        it('have a remove item function', function () {
            order.removeItem(1);
            expect(order.items[0]).to.equal(2);
        });

    });

});
