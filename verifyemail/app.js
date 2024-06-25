const express = require('express')
const mongoose = require('mongoose');
const User = require('./model/user');
const jwt = require('jsonwebtoken');
const sendmail = require('./controller/sendmail')

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/post',async(req,res)=>{
    const body = req.body;
    const token = await jwt.sign({body},'shashank',{expiresIn:'365d'})
    const ins = await User.create({
        name:body.name,
        password:body.password,
        email:body.email,
        token:token,
    })
    console.log(ins)
    res.send('created succes')
})
app.get('/sendmail/:id',sendmail)

app.get('/verify/:id',async(req,res)=>{
    
    const url = req.params.id;
    const veri = await jwt.verify(url,'shashank')
    if(veri){
        res.send('user verification succes')
    }else{
        res.send('user not verify')
    }
})
app.listen(9090);