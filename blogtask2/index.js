const express = require('express')
const bodyParser = require('body-parser')
const app = express();

require('./model/index')
const Blog = require('./model/blog')

app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

Blog.sync()

app.post('/posts',async(req,res)=>{
    const body = req.body;
    const ins = await Blog.create({
        title:body.title,
        content:body.content,
        author:body.author,
    })
    res.send(ins)
})
app.get('/posts',async(req,res)=>{
    const fnd = await Blog.findAll()
    res.send(fnd);
})
app.get('/posts/:id',async(req,res)=>{
    const idd = req.params.id;
    const fndd = await Blog.findByPk(idd)
    console.log(fndd)
    res.send(fndd)
})

app.put('/posts/:id',async(req,res)=>{
    const body = req.body;
    const idd = req.params.id;
    const upd = await Blog.update({
        title:body.title,
        content:body.content,
        author:body.author,
    },{
        where:{
            id:idd
        }
    })
    res.send('updated succses')
})
app.delete('/posts/:id',async(req,res)=>{
    const idd = req.params.id;
    const dlt = await Blog.destroy({
        where:{
            id:idd
        }
    })
    res.send('deleted success')
})

app.listen(8080,(()=>console.log('express server connected')))