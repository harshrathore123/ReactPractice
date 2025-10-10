const express = require('express');
const app = express();
const db = require('./db.js');

app.get('/',(req,res)=>{
    res.send(`Server Connected`);
})

app.listen(3000,()=>{
    console.log(`Connected on http://localhost:3000`)
})