const db = require('../database/db.js');
const bcrypt = require('bcrypt');

const Booking = (req,res)=>{
    const {firstname,lastname,email,mobile,check_in,check_out,adult,kid,special_request} = req.body;

    const bookingdetail = [firstname,lastname,mobile,email,adult,kid,special_request,check_in,check_out];
    const query = 'insert into BookingDetail (firstname,lastname,mobile,email,adult,kid,special_request,check_in,check_out) values (?,?,?,?,?,?,?,?,?)';
    
    db.query(query,bookingdetail,(err,result)=>{
        if(err) res.json({msg:`Error: ${err.message}`});
        else{
            res.json({result:result})
        }
    })
}

module.exports = {Booking};