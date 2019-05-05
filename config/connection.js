const mysql = require("mysql");
require("dotenv").config();
if (process.env.CLEARDB_DATABASE_URL) {
    connection = mysql.createConnection({
        host: "us-cdbr-iron-east-02.cleardb.net",
        user: "b1718fad4e37c6",
        password: "cc47b9b9",
        database: "heroku_b1718fad4e37c6"
    });
} 
else{
    
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "burgers_db"
    });
}

connection.connect(function(err) {
    if (err) {
        console.log("This did not go well");
        return;
    }
    console.log("MySQL connected: " + connection.threadId);
})

module.exports = connection;
