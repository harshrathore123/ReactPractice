const bcrypt = require('bcrypt');
const db = require('../db.js');
const { use } = require('react');

const Register = (req, res) => {
  const { fullname, email, password, confirmpass } = req.body;

  if (!fullname || !email || !password || !confirmpass) {
    return res.status(400).json({ msg: "All fields are mandatory" });
  }

  if (password !== confirmpass) {
    return res.status(400).json({ msg: "Passwords do not match" });
  }

  const query = 'SELECT * FROM user WHERE email = ?';
  db.query(query, [email], (err, checkemail) => {
    if (err) return res.status(500).json({ msg: `Error checking email: ${err.message}` });
    if (checkemail.length > 0) return res.status(400).json({ msg: "Email is already registered" });

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return res.status(500).json({ msg: `Error hashing password: ${err.message}` });

      const insertQuery = 'INSERT INTO user (fullname, email, password) VALUES (?, ?, ?)';
      db.query(insertQuery, [fullname, email, hash], (err, result) => {
        if (err) return res.status(500).json({ msg: `Error inserting user: ${err.message}` });
        res.status(200).json({ msg: "User registered successfully", userId: result.insertId });
      });
    });
  });
};

const Login = (req,res)=>{
    const {email,password} = req.body;
    // res.send(`Email:${email} and Password: ${password}`)
    if(!email||!password){
        return res.status(502).json({msg:'All field mendatory'})
    }

    const select = `select * from user where email=?`;
    db.query(select,[email],(err,result)=>{
        if(err) return res.status(500).json({msg:`Query Error: ${err.message}`})
        
        if (result.length === 0) {
      return res.status(401).json({ msg: 'User not found' });
    }
        else{
            const users = result[0];
            const hash = users.password;

            bcrypt.compare(password,hash,(err,chk)=>{
                if(err) res.status(500).json({msg:`Bcrypt Error: ${err.message}`});
                
                if(!chk){
                    res.status(502).json({msg:`Not Matched Password`})
                }
                
                    res.status(200).json({msg:`Successfully Login`});
                
            })
        }
    })
}

module.exports = { Register,Login };
