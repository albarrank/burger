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

burgerRoute.post("/", function(req, res) {
    
    var newBurger = req.body.newBurger;
    console.log(newBurger);

// callback chain starts here (used to display data from database to the html)
    burger.getAllBurgers(function(data) {
        console.log(data);
    });

    
    // this callback takes a user input 
    burger.addNewBurger(newBurger, function(data) {
        console.log(data);
        res.redirect("/");
    });


});


module.exports = burgerRoute;