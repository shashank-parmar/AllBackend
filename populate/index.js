const express = require("express")
const Student = require('./models/student')
const Classs = require('./models/index')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.post('/addclass',async(req,res)=>{
    const body = req.body
    const ins = await Classs.create({
        std:body.std,
        div:body.div,
        Student:[]
    })
    
    res.send(ins)
})

app.post('/addstudent',async(req,res)=>{
    const body = req.body
    const ins = await Student.create({
        rollno:body.rollno,
        name:body.name,
    })
    res.send(ins)
})

app.get('/getclass',async(req,res)=>{
    const get = await Class.findAll({})
    res.send(get)
})


app.listen(7000)