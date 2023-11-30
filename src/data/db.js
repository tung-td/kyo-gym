const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: 'Test'
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM tasks", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});