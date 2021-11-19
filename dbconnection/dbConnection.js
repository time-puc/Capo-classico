var mysql = require('mysql2');
require('dotenv').config();

module.exports = function(){  
    return mysql.createConnection({
        host : process.env.DB_HOST,
        user : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE
    });
};