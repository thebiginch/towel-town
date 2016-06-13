'use strict'

var Sequelize = require('sequelize');

module.exports = function(db) {

    db.define('towel', {
        // Think about extra validations throughout this model (price must be greater than zero, etc.) -AAOB
        type: {
            type: Sequelize.ENUM('Beach', 'Bath', 'Face', 'Washcloth', 'Golf', 'Gym', 'Dish', 'Hot Towel', 'Bar'),
            allowNull: false
        },
        material: {
            type: Sequelize.ENUM('MicroFibre', 'MacroFibre', 'Egyptian Cotton', 'Terry Cloth', 'Bamboo', 'Linen', 'Silk', 'Pima Cotton', 'Baby Alpaca'),
            allowNull: false
        },
        color: {
            type: Sequelize.ENUM('Fushia', 'Seaspray Green', 'Coral', 'Eggshell White', 'Yolk Yellow', 'Purple Rain', 'Burgandy (Ron)'),
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT
        },
        image: {
            // Maybe use a URL validator here -AAOB
            type: Sequelize.STRING
            // In general, try to avoid having TODO comments, console.logs, etc. in master -AAOB
                //maybe need a getter method for each towel depending on size and color??
        },
        absorption: {
            type: Sequelize.INTEGER
        },
        price: {
        	type: Sequelize.FLOAT(2),
        	allowNull: false
        },
        stock: {
        	type: Sequelize.INTEGER,
        	default: 0
        },
        threadcount: {
        	type: Sequelize.INTEGER
        },
        towelTech: {
        	//Additional advanced features
        	//Frakentowel (sewn together various towels)
        	type: Sequelize.ARRAY(Sequelize.STRING)
        },
        softness: {
        	type: Sequelize.STRING
        }
    }, {
        getterMethods: {
            dimensions: function() {
                // This lookup won't work without putting parentheses
                // around the object literal -AAOB
                return {
                    'Beach': [40, 70],
                    'Bath': [30, 56],
                    'Face': [18, 30],
                    'Washcloth': [13, 13],
                    'Golf': [16, 22],
                    'Gym': [16, 27],
                    'Dish': [16, 26],
                    'Hot Towel': [13, 13],
                    'Bar': [14, 18]
                }[this.type];
            },
            name: function() {
                // This could be a great use case for a template string - fun ES6-ness -AAOB
                // i.e. `${this.color} ${this.material} ${this.type} Towel`
                return this.color + ' ' + this.material + ' ' + this.type + ' Towel';
            }
        },
        instanceMethods: {
            // Couldn't this also be a getterMethod? -AAOB
            getWetness: function() {
                return 1 / this.absorption;
            }
        }
    });
};
