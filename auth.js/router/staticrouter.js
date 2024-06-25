const express = require('express')

const route = express.Router();


route.get('/signup',(req,res)=>{
    return res.send('<h1>shashank from static route</h1>')
})

module.exports=route;