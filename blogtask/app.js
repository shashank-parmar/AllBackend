const express = require('express')
const mongoose = require('express')
const book = require('./model/blog')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/api/post',async(req,res)=>{
    const body = req.body;
    const ins = await book.create({
        title:body.title,
        content:body.content,
        author:body.author,
    })
    res.status(200).json({
        message:"success",
        data : ins
    })
})
app.get('/api/post',async(req,res)=>{
    const fn = await book.find({})
    console.log(fn)
    res.send(fn)
})

app.get('/api/post/:id',async(req,res)=>{
    const idd = req.params.id;
    const fet = await book.findById(idd)
    res.send(fet)
})

app.put('/api/post/:id', async (req, res) => {
    const iddd = req.params.id;
    try {
        const up = await book.findByIdAndUpdate(iddd, req.body, { new: true });
        res.send({ updated: up, message: 'updated successfully' });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/api/post/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const dl = await book.findByIdAndDelete(id);
        res.send({ deleted: dl, message: 'Data deleted successfully' });        
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(5050);