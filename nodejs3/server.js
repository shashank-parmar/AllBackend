const http = require('http')
const fs = require('fs');
const url = require('url');

const server = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.method} new req recive\n`
    const myurl = url.parse(req.method)
    console.log(myurl)
    fs.appendFile('login.txt',log,(err,data)=>{
        switch(req.url){
            case '/':
                res.end('<h1>homepage</h1>');
                break;
            case '/about':
                res.end("<h1>about page</h1>");
                break;
            case '/contact':
                res.end('<h1>contact page</h1>');
                break;
            default:
                res.end("<h1>404</h1>");
        }
        console.log(req.headers);
    })
    
})

server.listen(3000)