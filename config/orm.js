const connection = require("./connection");



/*
class Burger {

    constructor(burgerName, ifDevoured) {
        this.burgerName = burgerName;
        this.devoured = ifDevoured;
    }

    selectAll() {
        connection.query("SELECT * from burgers;", function(err, data) {
            if (err) {
                throw err;
            }
            console.log(data);
        });
        console.log("select all  function works");
    }

    insertOne() {
        console.log("insert one function works");
    }

    updateOne() {
        console.log("updateOne function works");
    }

}
*/
var ormObject = {
    getAllBurgersFromDatabase: function(AnonCallbackFunctionFromBurgerModel) {
        
        var queryString = "SELECT * FROM burgers WHERE devoured = 0;";

        console.log("step 2");

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            console.log("step 1");
            AnonCallbackFunctionFromBurgerModel(result);
        });
    },

    addNewBurgerToDatabase: function (newBurger, callbackFunctionToAddBurger) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);";

        connection.query(queryString, [newBurger, false], function(err, result) {
            if (err) {
                throw err;
            }
            callbackFunctionToAddBurger(result);
        });
    },

    changeDevouredInDatabase: function(eatenBurgerId, callbackFunctionToChangeDevoured) {
        var queryString = "UPDATE burgers SET devoured  = ? WHERE id = ?;";

        connection.query(queryString, [true, eatenBurgerId], function(err, result) {
            if (err) {
                throw err;
            }
            callbackFunctionToChangeDevoured(result);
        });
    }

}

module.exports = ormObject;