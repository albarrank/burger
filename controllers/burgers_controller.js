const express = require("express");
const burger = require("../models/burger");

var burgerRoute = express.Router();
burgerRoute = express();

burgerRoute.use(express.urlencoded({extended: true}));
burgerRoute.use(express.json());

burgerRoute.get("/test", function(req, res) {
    return res.send("burger route is working now");
});

module.exports = burgerRoute;