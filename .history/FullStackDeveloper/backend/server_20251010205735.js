const express = require('express');
const app = express();
const router = require('../route/auth');
const router = require('./route/auth');
const cors = require('cors');

cors({
    origin:"http://localhost:5173"
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/',router);

app.get('/',(req,res)=>{
    res.send(`Server Connected`);
})

app.listen(3000,()=>{
    console.log(`Connected on http://localhost:3000`)
})