const bcrypt = require('bcrypt');
const db = require('../db.js');

const Login = (req,res)=>{

}

const Register = (req,res)=>{
    const {fullname,email,password,confirmpass} = req.body;
    res.send(`Fullname: ${fullname}, Email: ${email}, Password: ${password} and Confirm Pass: ${confirmpass}`);

}

module.exports = {Login,Register};