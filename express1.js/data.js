const express = require('express')
const mongoose = require('mongoose')

const data = express();

data.use(express.urlencoded({extends:false}))
data.use(express.json())

mongoose
.connect('mongodb://127.0.0.1:27017/table1')
.then(()=>console.log("connection succes"))
.catch((err)=>console.log(err))

const userSchema = new mongoose.Schema({
    name:{
        Type:String,
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    }

},{timestamps:true})

const userdata = mongoose.model('userdata',userSchema)

data.post('/post',async(req,res)=>{
    const bd = req.body;
    console.log(bd);
    // res.send("<h1>shashank</h1>")
    if(!bd || !bd.name || !bd.age || !bd.gender){
        console.log('please fill all the fileds')
    }
    const rs = await userdata.create({
        name:bd.name,
        age:bd.age,
        gender:bd.gender
    });
    rs.save();
    console.log(rs)
    return res.status(201)
})
data.get('/',async(req,res)=>{
    const alluser = await userdata.find({})
    const html = `<ul>${alluser.map((userdata)=>`<li>${userdata.name}</li>`).join("")}</ul>`;
    res.send(html)
})

data.listen(5000);
