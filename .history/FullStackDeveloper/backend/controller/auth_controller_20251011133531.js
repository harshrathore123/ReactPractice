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
        bcrypt.hash(password,10,(err,hash)=>{
            if(err) return res.send({msg:`Error at Bcrypt Time: ${err.message}`})
            else{
                const query = 'insert into user(fullname,email,password) values(?,?,?)';
                db.query(query,[fullname,email,hash],(err,result)=>{
                    if(err) return res.send({msg:`Error at Query Time: ${err.message}`});
                    else{
                        res.send({result:result.insertId})
                    }
                })
            }
        })
    }
}

module.exports = {Register};