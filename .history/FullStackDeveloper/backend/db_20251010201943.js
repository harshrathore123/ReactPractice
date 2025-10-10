const mysql = require('mysql2');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"harsh@aA1234",
    database:"collection"
});

db.connect((err)=>{
    if(err) return console.log(`Error: ${err}`);
    else console.log(`Connected connected successfully`);
})

module.exports = db;