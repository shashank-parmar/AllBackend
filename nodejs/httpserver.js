const http = require('http');

const port = 3000;

const server = http.createServer((req,res)=>{
    res.statuscode= 200;
    res.setHeader('Content-type','text-html');
    res.end('<h1>shashanks</h1>')
})

server.listen(3000)