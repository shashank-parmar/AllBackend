const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./model/index')
const User = require('./model/user')
const employee = require('./model/employee')
const { DataTypes } = require('sequelize')

const app = express();

app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

User.sync()
employee.sync()

User.hasOne(employee,{foreignKey:'UserId'});
employee.belongsTo(User,{foreignKey:'UserId'});


app.post('/create',async(req,res)=>{
    const bd = req.body;
    const ind = await User.create({
        firstName:bd.firstName,
        lastName:bd.lastName,
        gender:bd.gender,
    })
    res.send(ind)
})
app.post('/createemp',async(req,res)=>{
    const bd = req.body;
    const ind = await employee.create({
        firstName:bd.firstName,
        lastName:bd.lastName,
        salary:bd.salary,
    })
    res.send(ind)
})

app.get('/getbyid/:id',async(req,res)=>{
    const idd = req.params.id;
    const fnd = await User.findByPk(idd,{
        attributes:[
            'firstName'
        ]
    })
    res.send(fnd)
})
app.get('/getall',async(req,res)=>{
    const fnd = await User.findAll()
    const ex = await User.findAll({
        attributes: { exclude: ['createdAt','updatedAt'] },
        include: [{ model: employee }]
    })
    res.send(ex)
})




app.listen(7070);