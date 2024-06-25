const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const mokdata = require('./mockdata.json')
const jwt = require('jsonwebtoken')

const rest = express();
rest.use(express.json())
rest.use(express.urlencoded({extended:false}))


mongoose
.connect('mongodb://127.0.0.1:27017/rest')
.then(()=>console.log('successs'))
.catch((err)=>console.log(err))

const dataSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    fisrtname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    gender:{
        type:String
    },
    token :{
        String,
    }
},{ timestamps:true })

const Rest = mongoose.model('Rest',dataSchema);

rest.post('/post',async(req,res)=>{
    const bd = req.body;
    console.log(bd)
    var token = jwt.sign({fisrtname:req.body.fisrtname  },'shashank')
    rest.token = token;
    console.log(token)

    var decode =jwt.verify(token,'shashank')
    if(!bd || !bd.id || !bd.firstname || !bd.email || !bd.gender){
        res.status(401).json({'no':'all filed are required  '})
    }
    const ok = await Rest.create({
        id:bd.id,   
        fisrtname:bd.fisrtname, 
        email:bd.email,
        gender:bd.gender,
        // token:token
    })
    console.log(ok)
    res.status(201)
})

rest.get('/',async(req,res)=>{
    const dis = await Rest.find({'fisrtname':'harsh'})
    res.send(`<h1>${dis}</h1>`)
})

rest.delete('/delete/:id',async(req,res)=>{
    const pr = req.params.id;
    const okk = await Rest.deleteOne({id:pr})
    console.log(okk)
})

rest.delete('/deleteone/:id',async(req,res)=>{
    const idd = req.params.id;
    const okay = await Rest.deleteOne({id:idd})
    console.log(okay)
})

rest.patch('/update/:id',async(req,res)=>{
    const uid = req.params.id;
    const bod = req.body;
    // const okay = await Rest.updateOne({ _id: '662b2bce5a33e57d7c1b4ccf' }, { $set: { fisrtname:'savani',email:'savani@gmail.com'}})
    // res.send(`<h1>${Rest.find({_id:'662b2bce5a33e57d7c1b4ccf'})}</h1>`)
    const ohk = await Rest.updateMany({_id:uid},{$set:{fisrtname:bod.fisrtname,email:bod.email,gender:bod.gender}})
    res.status(201).json({'ohk':'data updated'})
    console.log(ohk)
})
rest.listen(6000);