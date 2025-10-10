const express = require('express');
const app = express();
const router = require('../route/auth');
const { route } = require('./route/auth');


app.use('/api/',router);

app.get('/',(req,res)=>{
    res.send(`Server Connected`);
})

app.listen(3000,()=>{
    console.log(`Connected on http://localhost:3000`)
})