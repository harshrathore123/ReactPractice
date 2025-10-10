const express = require('express');
const app = express();
const db = require('./db.js');

app.get('/',(req,res)=>{
    res.send(`Server Connected`);
})