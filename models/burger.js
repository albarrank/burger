const ormObject = require("../config/orm");

/* 
make some code here that would take in
the inputs from the user and sends it as parameters
to the methods inside the ormObject methods
 */

var burger = {
    getAllBurgers: function(AnonCallbackFunctionsFromBurgerController) {

        ormObject.getAllBurgersFromDatabase(function(result) {
            AnonCallbackFunctionsFromBurgerController(result);
            
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