const ormObject = require("../config/orm");

/* 
make some code here that would take in
the inputs from the user and sends it as parameters
to the methods inside the ormObject methods
 */

var burger = {
    getAllBurgers: function(AnonCallbackFunctionsFromBurgerController) {

        console.log("step 4");
        
        ormObject.getAllBurgersFromDatabase(function(result) {
            console.log("step 3");
            AnonCallbackFunctionsFromBurgerController(result);
            
        });
    }
};

module.exports = burger;