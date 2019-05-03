const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

const burgerRoutes = require("./controllers/burgers_controller"); 

app.use("/", burgerRoutes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});