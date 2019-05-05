const express = require("express");
const burger = require("../models/burger");
const path = require("path");

var burgerRoute = express.Router();
burgerRoute = express();

burgerRoute.use(express.static("public"));
burgerRoute.use(express.urlencoded({extended: true}));
burgerRoute.use(express.json());

var exphbs = require("express-handlebars");

burgerRoute.engine("handlebars", exphbs({defaultLayout: "main"}));
burgerRoute.set("view engine", "handlebars");

// ----------------------------------------------------------------------------------------------

burgerRoute.get("/", function(req, res) {

    burger.getAllBurgers(function(data) {

        res.render("index", {burgers: data});
    });

});
// creat burger function
burgerRoute.post("/", function(req, res) {
    
    var newBurger = req.body.newBurger;
    console.log(newBurger);

    // callback chain starts here (used to display data from database to the html)
    // burger.getAllBurgers(function(allBurgerdata) {
    //     console.log(allBurgerdata);
    // });

    
    // this callback takes a user input 
    burger.addNewBurger(newBurger, function(updatedBurgerdata) {
        // console.log(updatedBurgerdata);
        res.redirect("/");
    });

});

// change devoured column
burgerRoute.post("/api", function(req, res) {
    var burgerEaten = req.body;

    burger.devourBurger(burgerEaten.id, function(devouredBurgerData) {
        // console.log(devouredBurgerData);
    });
    
    res.redirect("/");
    // res.send(bur);
});

module.exports = burgerRoute;