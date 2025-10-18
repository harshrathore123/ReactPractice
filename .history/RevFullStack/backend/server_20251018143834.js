const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:'http://localhost:5173'
}));

app.use('/travel/',route);

app.listen(3000,()=>{
    console.log(`Connected on http://localhost:3000`);
})
