const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    const index = fs.readFileSync('index.html','utf-8');
    const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
    const product = data.products[3]
    // const id = req.url.split('/')[2];
    // const findd = product.find(p=>p.id===(+id))
    // console.log(findd)

    res.setHeader('content-type','text-html')
    res.setHeader('content-type','application-json');
    const rep = index.replace('**title**',product.title).replace('**url**',product.thumbnail)
    res.end(rep);
        
})

server.listen(3000)