const http = require('http')
const math = require('./math');
const fs = require('fs')
fs.writeFile('./text.txt','helloji shashank',(err)=>{})
fs.writeFileSync('./text.txt','helloji shashank') // for create file
const rd = fs.readFileSync('./text.txt','utf-8')
console.log(rd.toString())//utf thi encoding thay ne tostring thi pn
// const ff = fs.appendFileSync('./text.txt','append')
    
console.log(math.add(5,4))
console.log(math.sub(5,4))
console.log(math.mul(5,4))
console.log(math.div(5,4))
// console.log(adding(2,4,4))

const server = http.createServer((req,res)=>{
    res.end("<h1>shashank</h1>")
    res.setHeader('content-type','text-html')
    
})

server.listen(3000);