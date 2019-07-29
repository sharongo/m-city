const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'm_city',
    port: '3308',
    multipleStatements: true
    
});

module.exports = mysqlConnection;