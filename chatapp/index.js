const http = require('http');
const express = require('express');
const path = require('path')
const { Server } = require('socket.io')

const app = express();

app.use(express.static(path.resolve('./public')))
const server = http.createServer(app);
const io = new Server(server);  

io.on("connection",(socket)=>{
    console.log("a new user connected",socket.id)
    socket.on('shashank',(message)=>{
        console.log(message)
        const rp = socket.id;
        
        const rpl = rp.replace(socket.id,'shashank')
        io.emit('shashank',rpl)
        io.emit('shashank',message)
    });     
})      
app.get('/',(req,res)=>{
     res.sendFile('/public/index.html')
})

server.listen(9000)