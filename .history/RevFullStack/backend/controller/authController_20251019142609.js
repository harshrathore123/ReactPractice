const db = require('../database/db.js');
const bcrypt = require('bcrypt');

const Booking = (req,res)=>{
    const {firstname,lastname,email,mobile,check_in,check_out,adult,kid,special_request} = req.body.bookingdetail;

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
                    res.json({result:result});
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
        else res.json({result:result});
    })
}

module.exports = {Booking,TravelUser,ContactUsInfo};