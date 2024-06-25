const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')


const server = express();

mongoose
.connect('mongodb://localhost:27017/jwt')
.then(()=>console.log('connection success'))
.catch((err)=>console.log(err))

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        require:true,
    },
    password:{
        type: String,
        require:true,
        
    },
    email:{
        type: String,
        require:true,
    },
    token:{
        type:String,
        require:true,
    }
},{timeStamp:true})

const user = mongoose.model('user',userSchema)

server.use(express.json())
server.use(express.urlencoded({extended:false}))

server.post('/',async(req,res)=>{
    const body = req.body;
    const token = jwt.sign({body},'shashank',{expiresIn:'24h'})
    await user.create({
        name:body.name,
        password:body.password,
        email:body.email,
        token:token
    })
    res.send("created sucees")
    console.log(token)
})


server.get('/verify',async(req,res)=>{
    const heder = req.headers.authorization;
    const ok = await jwt.verify(heder,'shashank')
    if(ok){
        res.send("user verifyed")
        console.log(ok);
    }else{
        res.send('unotherrize user')
    }
})
server.listen(8000);
