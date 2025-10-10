const bcrypt = require('bcrypt');
const db = require('../db.js');

const Login = (req,res)=>{

}

const Register = (req,res)=>{
    const {fullname,email,password,confirmpass} = req.body;
}

module.exports = {Login,Register};