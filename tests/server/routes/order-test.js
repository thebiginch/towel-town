// Instantiate all models
var expect = require('chai').expect;

var Sequelize = require('sequelize');
var dbURI = 'postgres://localhost:5432/testing-fsg';
var db = new Sequelize(dbURI, {
    logging: false
});
require('../../../server/db/models/order')(db);
require('../../../server/db/models/user')(db);

var supertest = require('supertest');

describe('Orders Route', function () {

    var app, Order;

    beforeEach('Sync DB', function () {
        return db.sync({ force: true });
    });

    beforeEach('Create app', function () {
        app = require('../../../server/app')(db);
        Order = db.model('order');
    });

	describe('testing order routes', function () {

		var guestAgent;

		beforeEach('Create guest agent', function () {
			guestAgent = supertest.agent(app);
		});

		beforeEach('Create a order', function (done) {
			return Order.create({ items: [1, 2, 3] })
						.then(function(newItem) {
							done();
						}).catch(done);
		});

		it('guest agent get all orders', function (done) {
			guestAgent.get('/api/orders')
				.expect(200)
				.end(function(err,response){
					if(err) return done(err);
					expect(response.body).to.be.an('array');
					done();
				});
		});

		it('guest agent gets one order', function (done) {
			guestAgent.get('/api/orders/1')
				.expect(200)
				.end(function(err,response){
					if(err) return done(err);
					expect(response.body).to.be.an('object');
					done();
				});
		});

		it('can post new order to db',function(done){
			guestAgent.post('/api/orders')
				.send({items: [1,2,3]})
				.expect(201)
				.end(function(err,response){
					if(err) return done(err);
					expect(response.body).to.be.an('object');
					expect(response.body).to.have.any.keys('items','status','date','orderPrice');
					done();
				})

		})

	});

});