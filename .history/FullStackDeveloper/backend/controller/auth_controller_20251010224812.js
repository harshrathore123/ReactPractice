const bcrypt = require('bcrypt');
const db = require('../db.js');

const Register = (req,res)=>{
    const {fullname,email,password,confirmpass} = req.body;
    res.send(`Fullname: ${fullname}`);
}

module.exports = {Register};