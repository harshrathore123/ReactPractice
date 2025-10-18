const mysql = require('mysql2');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"harsh@aA1234",
    database:"travelling"
});

db.connect((err)=>{
    if(err) console.log(`Database not connected`);
    else console.log(`Database Connected Successfully`);
})