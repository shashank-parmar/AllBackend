const express = require('express');
const sendmail = require('./controller/sendmail')


const app = express();

app.get('/',(req,res)=>{
    res.send("shashank")
})

app.get('/sendmail', sendmail)

app.listen(9000)