const express = require('express')
const mongoose = require('mongoose')


const dbs = express();
mongoose
.connect('mongodb://127.0.0.1:27017/mongouser')
.then(()=>console.log('connected succes'))
.catch((err)=>console.log(err))

dbs.use(express.json()) 

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        // require:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        require:true,
        // unique:true,
    },
    gender:{
        type:String,
    }
},{timestamps:true})

dbs.use(express.urlencoded({extended:false}))


const user = mongoose.model('user',userSchema)

dbs.post('/createuser',(req,res)=>{
    const body = req.body;  
    if(!body || !body.fisrtName || !body.lastName || !body.email || !body.gender){
        return res.status(400)  
    }
    const result =  user.insert({
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email,
        gender:body.gender,
    })
    console.log(result)
    return res.status(201)
})

dbs.listen(3000);