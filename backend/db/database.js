const mysql = require("mysql");

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    port: '3006',
    password : '1234',
    database : 'todolist'
});

//open mysql connection
db.connect(error => {
    if (error) throw error;
    console.log("DB connected!")
})

module.exports = db;