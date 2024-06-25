const express = require('express');
const data = require('./mockdata.json')
const fs = require('fs');
const { json } = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose')

const app = express();

app.use((req,res,next)=>{
    console.log('its a middlware last')
    res.end(console.log("req-res end"))
    next();
})

app.use(express.json()) 

app.use((req,res,next)=>{
    console.log(req.method,req.hostname,req.get('User-Agent'))
    next()
})

const auth = (req,res,next)=>{
    console.log(req.query)
    if(req.query.password){
        next();
    }
    else{
        res.sendStatus(401);
    }
}

app.use(auth)

app.use(express.urlencoded({extended:false}))



app.get('/',(req,res)=>{
    res.json(data)
})

app.get('/username',(req,res)=>{
    const html = `<ul>${data.map((user)=>`<li>${user.first_name}</li>`).join("")}</ul>`;
    res.send(html)
})

app.get('/user/:id',(req,res)=>{
    const id = Number(req.params.id);
    const user = data.find((user)=>user.id === id); 
    res.send(user)
})

app.post('/create',(req,res)=>{
    const body = req.body;
    data.push(body)
    fs.writeFile('./mockdata.json',JSON.stringify(data),(err,data)=>{
        res.send("<h1>success</h1>")
    })
})

app.delete('/delete',(req,res)=>{
    const idd   = Number(req.params.id)
    const del = data.splice((id)=>user.id===idd)
    console.log(del)
})

app.get('/about',(req,res)=>{
    res.end('<h1>about page</h1>')
})

app.listen(8000);