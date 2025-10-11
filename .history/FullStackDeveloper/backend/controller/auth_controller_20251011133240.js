const bcrypt = require('bcrypt');
const db = require('../db.js');

const Register = (req,res)=>{
    const {fullname,email,password,confirmpass} = req.body;
    // res.send(`Data Comes from backend Fullname: ${fullname},Email:${email},password:${password} and confirm pass: ${confirmpass}`);

    if(!fullname||!email||!password||!confirmpass){
        res.send(`All field Mendatory`);
    }

    else if(password!==confirmpass){
        res.send(`Not matched password and confirm password`);
    }
}

module.exports = {Register};