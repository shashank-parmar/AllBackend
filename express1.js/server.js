const express = require('express');
const data = require('./mockdata.json')
const fs = require('fs');

const server = express();

server.use((req,res,next)=>{
    fs.appendFile('log.txt',`\n${Date.now()}: ${req.path}: ${req.method}`,(err,data)=>{
        next();
    })
})

server.use((req,res,next)=>{
    console.log('this is last middlware but diclare in top')
    next();
})

server.use((req,res,next)=>{
    console.log('its a middlware first')
    // res.end(console.log("req-res end"))
    next();
})

server.use((req,res,next)=>{
    console.log("this is second middlware")
    next();
})

server.use((req,res,next)=>{
    console.log('this is thired middlware')
    // res.end(console.log('req-res is end'))
})

server.get('/',(req,res)=>{
    res.json(data)
})

server.get('/username',(req,res)=>{
    const html = `<ul>${data.map((user)=>`<li>${user.first_name}</li>`).join("")}</ul>`;
    res.send(html)
})

server.get('/user/:id',(req,res)=>{
    const id = Number(req.params.id);
    const user = data.find((user)=>user.id === id); 
    res.send(user)
})

server.post('/create',(req,res)=>{
    const body = req.body;
    data.push(body)
    fs.writeFile('./mockdata.json',JSON.stringify(data),(err,data)=>{
        res.send("<h1>success</h1>")
    })
})

server.delete('/delete',(req,res)=>{
    const idd   = Number(req.params.id)
    const del = data.splice((id)=>user.id===idd)
    console.log(del)
})

server.get('/about',(req,res)=>{
    res.end('<h1>about page</h1>')
})

server.listen(9000);