var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'jiangjiang4444',
    database: 'management',
    insecureAuth: true
});
connection.connect(err => {
    if (err) {
        throw err;
    }
});
console.log('aaa')

module.exports = connection