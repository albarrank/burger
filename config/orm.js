const connection = require("./connection");

//Final end to the chain of callback functions

var ormObject = {

    getAllBurgersFromDatabase: function(AnonCallbackFunctionFromBurgerModel) {
        
        var queryString = "SELECT * FROM burgers";

        connection.query(queryString,function(err, result) {
            if (err) {
                throw err;
            }
            AnonCallbackFunctionFromBurgerModel(result);
        });
    },

    addNewBurgerToDatabase: function (newBurger, AnonCallbackFunctionToAddBurger) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);";

        connection.query(queryString, [newBurger, false], function(err, result) {
            if (err) {
                throw err;
            }
            AnonCallbackFunctionToAddBurger(result);
        });
    },

    changeDevouredInDatabase: function(eatenBurgerId, AnonCallbackFunctionToChangeDevoured) {
        var queryString = "UPDATE burgers SET devoured  = ? WHERE id = ?;";

        connection.query(queryString, [true, eatenBurgerId], function(err, result) {
            if (err) {
                throw err;
            }
            AnonCallbackFunctionToChangeDevoured(result);
        });
    }

};

module.exports = ormObject;

