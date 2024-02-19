const dotenv = require("dotenv");
var mysql = require('mysql');

dotenv.config();

config = {
    host: process.env.DB_CONNECT_HOST,
    user: process.env.DB_CONNECT_USER,
    password: process.env.DB_CONNECT_PASS,
    database: process.env.DB_CONNECT_DATABASE
};

var db = mysql.createConnection(config);

db.connect(function (err) {
    if (err) throw err;
    console.log("Database connected successfully!");
});

function funcselect(sql){
    db.query(sql, (err, result) => {
        if(err) throw err;

        return result;
    });
}

/* module.exports ={
    connection : mysql.createConnection(config) 
} */ 
module.exports = db;