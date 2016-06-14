/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var chalk = require('chalk');
 var db = require('./server/db');
 var User = db.model('user');
var Towel = db.model('towel');
var Order = db.model('order');
var Review = db.model('review');

 var Promise = require('sequelize').Promise;
 
var seedTowels = function () {

    var towels = [
        {
            type: 'Bath',
            material: 'Pima Cotton',
            color: 'Fushia',
            description: 'A very good towel',
            absorption: 100,
            price: 10.99,
            stock: 100,
            threadcount: 10000,
            towelTech: ['GPS','Auto-Drying'],
            softness: 'Super soft'
        },
        {
            type: 'Beach',
            material: 'MicroFibre',
            color: 'Coral',
            description: 'A very wet towel',
            absorption: 2,
            price: 3.5,
            stock: 25,
            threadcount: 1000,
            softness: 'unsoft'
        
        },
        {
            type: 'Dish',
            material: 'Linen',
            color: 'Eggshell White',
            description: 'A great towel!',
            absorption: 5,
            price: 4.99,
            stock: 12,
            threadcount: 300,
            softness: 'rough'
        },
        {
            type: 'Golf',
            material: 'Bamboo',
            color: 'Yolk Yellow',
            description: 'A sticky towel...',
            absorption: 9,
            price: 2.99,
            stock: 999,
            threadcount: 100,
            softness: 'sticky'
        }
    ];

    var creatingTowels = towels.map(function (towelObj) {
        return Towel.create(towelObj);
    });

    return Promise.all(creatingTowels);

};

var seedOrders = function(){
    return Order.create({items: [1,2],
                        orderPrice: 5.99
                    });
}

 db.sync({ force: true })
    .then(function(){
        return seedTowels();
    })
    .then(function () {
         console.log(chalk.green('Seed successful!'));
         process.kill(0);
    });

