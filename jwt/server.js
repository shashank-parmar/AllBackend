const express = require('express')
const jwt = require('jsonwebtoken')

const server = express();


function verifytoken(req,res,next){
    const headerr = req.headers['authorization']
    if (typeof headerr !== 'undefined'){
        const token = headerr;
        req.token = token;
        next();
    }else{
        console.log('invalid token from function')
    }
}
server.post('/user',verifytoken,(req,res)=>{
    jwt.verify(req.token,'shashank',(err,authdata)=>{
        if(err){
            res.send(console.log('invalid token from api'))
        }else{
            res.json({
                message:'verify sucess',
                authdata
            })
        }
    })
})
server.post('/post',(req,res)=>{
    const user = {
        id:1,
        username:'harsh',
        email:'hp@gmail.com'
    }
    jwt.sign({user},"shashank",{expiresIn:'500s'},(err,token)=>{
        res.json({
            token
            
        })
        console.log(token)
    })
    
})


server.get('/',(req,res)=>{
    res.send(console.log('get api'))
})

server.listen(4000);