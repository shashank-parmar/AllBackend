const express = require('express')
const users = require('./migrations/20240515044259-create-user')
const user = require('./models/user')
// const { queryInterface,Sequelize} = require('./migrations/20240515050642-create-employee')
const db = require('./models/index')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.post('/create',async(req,res)=>{
    const body = req.body;
    const ins = await user.create({
        firstname:body.firstname,
        email:body.email,
        gender:body.gender
    })
    res.send(ins)
})

app.listen(8888,()=>console.log('express server started'))
