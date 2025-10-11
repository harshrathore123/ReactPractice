const bcrypt = require('bcrypt');
const db = require('../db.js');

const Register = (req,res)=>{
    const {fullname,email,password,confirmpass} = req.body;
    res.send(`Data Comes from backend Fullname: ${fullname},Email:${email},password:${password} and confirm pass: ${confirmpass}`);


}

module.exports = {Register};