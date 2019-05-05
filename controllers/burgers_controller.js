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


burgerRoute.get("/", function(req, res) {

    burger.getAllBurgers(function(data) {

        res.render("index", {burgers: data});
    });

});

// Creates new burger
burgerRoute.post("/create", function(req, res) {
    
    var newBurger = req.body.newBurger;
    
    burger.addNewBurger(newBurger, function() {
        res.redirect("/");
    });

});

// Updates devoured column
burgerRoute.post("/update/:id", function(req, res) {
    // var burgerEaten = req.body;

    burger.devourBurger([req.params.id], function() {
        res.redirect("/");
    });
    
});

module.exports = burgerRoute;