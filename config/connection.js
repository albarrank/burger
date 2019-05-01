const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("This did not go well");
        return;
    }
    console.log("MySQL connected: " + connection.threadId);
})

module.exports = connection;
