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

    else{

        const query = 'select * from user where email=?';
        db.query(query,[email],(err,checkemail)=>{
            if(err) return res.send({msg:`Error at Checking Mail Time: ${err.message}`});
            else if(checkemail.length>0){
                res.send({msg:`Email is already registered`});
            }
            else{

            }
        })
    }
}

module.exports = {Register};