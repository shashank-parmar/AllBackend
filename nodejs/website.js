const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode=200;
    res.setHeader('content-type','text-html') 
    if(req.url == '/'){
        res.statusCode=200;
        const data = fs.readFileSync('./index.html');
        res.end(data.toString());
    }
    else if(req.url == '/about'){
        res.statusCode=200;
        const data = fs.readFileSync('./about.html');
        res.end(data.toString());
    }
    else if(req.url == '/contact'){ 
        res.statusCode=200;
        res.end('<h1>Contact page</h1>')
    }
    else{
        res.statusCode=404;
        res.end('<h1>page not found</h1>')
    }
})

server.listen(3000)