const db = require('../database/db.js');
const bcrypt = require('bcrypt');

const Booking = (req,res)=>{
    const {firstname,lastname,email,mobile,check_in,check_out,adult,kid,special_request} = req.body.bookingdetail;

    if(!firstname||!lastname||!email||!mobile||!check_in||!check_out||!adult||!kid||!special_request){
        return res.json({msg:"All field mendatory"})
    }

    const bookingdetail = [firstname,lastname,mobile,email,adult,kid,special_request,check_in,check_out];
    const query = 'insert into BookingDetail (firstname,lastname,mobile,email,adult,kid,special_request,check_in,check_out) values (?,?,?,?,?,?,?,?,?)';
    
    db.query(query,bookingdetail,(err,result)=>{
        if(err) res.json({msg:`Error: ${err.message}`});
        else{
            res.json({result:result})
        }
    })
}

const TravelUser = (req,res)=>{
    const {firstname,lastname,email,password,confirm_password,city,age} = req.body.userdata;

    if(!firstname||!lastname||!email||!password||!confirm_password||!age||!city){
        return res.json({msg:"All field is required"})
    }

    if(password!==confirm_password){
        return res.json({msg:"Password and Confirm Password not matched"})
    }

    bcrypt.hash(password,10,(err,hash)=>{
        if(err) return res.json({msg:`Password not hashing ${err.message}`})
        else{
            const insertQuery = 'insert into TravelUser (firstname,lastname,email,password,city,age) values(?,?,?,?,?,?)';
            const userArr = [firstname,lastname,email,hash,city,age];

            db.query(insertQuery,userArr,(err,result)=>{
                if(err){
                    res.json({msg:`Error: ${err.message}`});
                }
                else {
                    // console.log(result);
                    res.json({msg:"Registerd Successfully"});
                }
            })

        }
    })
}

const ContactUsInfo = (req,res)=>{
    const {name,email,subject,Message} = req.body.contactusdata;
    
    if(!name||!email||!subject||!Message){
        return res.json({msg:"All field is required"})
    }

    const contactusquery = 'insert into contactUsInfo(name,email,subject,Message) values(?,?,?,?)';
    const contactuserdata = [name,email,subject,Message];
    db.query(contactusquery,contactuserdata,(err,result)=>{
        if(err) return res.json({msg:`Query Error: ${err.message}`});
        else res.json({msg:"Successfully Stored Information"});
    })
}

const TravelUserLogin = (req,res)=>{
    const {email,password} = req.body.userLogin;

    if(!email||!password){
        return res.json({msg:"Userame and Password must be filled"});
    }

    const checkUserLoggedIn = 'select * from traveluser where email=?';
    const userdetail = [email];

    db.query(checkUserLoggedIn,userdetail,(err,result)=>{
        if(err) return res.json({msg:`Error: ${err.message}`});
        else{

              if (result.length === 0) {
    return res.json({ msg: "User not found" });
  }
            const user = result[0];
            const pass = user.password;
            bcrypt.compare(password,pass,(err,check)=>{
                if(err) return res.json({msg:`Error: ${err.message}`});
                if(!check){
                        return res.json({msg:"Not matched Password"});
                    }
                else{
                    res.json({msg:"Successfully Login"})
                }
            })
        }
    })
}
module.exports = {Booking,TravelUser,ContactUsInfo,TravelUserLogin};