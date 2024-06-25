const express = require('express')
const mongoose = require('mongoose');
const { moveCursor } = require('readline');
const path = require('path')
const multer = require('multer')

const server = express();
mongoose
.connect('mongodb://localhost:27017/mvc')
.then(()=>console.log('ohk success'))
.catch((err)=>console.log(err))

const upload = multer({dest:'upload/'})

server.set("view engine","ejs")
server.set("views",path.resolve("./view"))

server.use(express.urlencoded({extended:false}))
server.use(express.json())

const userSchema = new mongoose.Schema({
    id:{
        type:Number,
        unique:true,
    },
    firstname :{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    }
},{timestamps:true})


const user = mongoose.model('user',userSchema);

server.get('/',(req,res)=>{
    res.render("homepage")
})

server.post('/create', async(req,res)=>{
    const body = req.body;
    const okk = await user.create({
        id:body.id,
        firstname:body.firstname,
        email:body.email,
        gender:body.gender
    })
    res.status(202)
    console.log(okk)
})

server.post('/upload', upload.single('profile'),(req,res)=>{
    console.log(req.res)
    console.log(res.file);

    res.redirect('/')
})


server.listen(3001)