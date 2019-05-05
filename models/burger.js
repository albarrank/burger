const ormObject = require("../config/orm");

var burger = {
    getAllBurgers: function(callback) {

        ormObject.getAllBurgersFromDatabase(function(result) {
            callback(result);
            
        });
    },

    addNewBurger: function(newBurger, callback) {
        ormObject.addNewBurgerToDatabase(newBurger, function(result) {
            callback(result);
        })
    },

    devourBurger: function(burgerId, callback) {
        ormObject.changeDevouredInDatabase(burgerId, function(result) {
            callback(result);
        });
    }
};

module.exports = burger;