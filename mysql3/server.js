const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const Sequelize = require('sequelize')
const { DataTypes } = require('sequelize')
const jwt = require('jsonwebtoken')

const server = express()
server.use(bodyParser.json())
server.use(express.json())
server.use(express.urlencoded({extended:false}))

const sequelize = new Sequelize('jwt','root','Shashank2004',{
    host:'localhost',
    dialect:'mysql'
})

sequelize
.authenticate()
.then(()=>console.log('mysqlDb connected'))
.catch((err)=>console.log(err,'database connected error'))


const User = sequelize.define(
    'User',
    {
        username :{
            type: DataTypes.STRING(50),
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
        },
        gender:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        token:{
            type:DataTypes.STRING,
            allowNull:false,
        }
},
    {
        tableName:'users',
        createdAt:true,
        updatedAt:true,
    }
)
console.log(User === sequelize.models.User); // true

User.sync()
// User.drop()

server.post('/post',async(req,res)=>{
    const body = req.body;
    const jwtt = await jwt.sign(body,'shashank',{expiresIn:'1y'})
    const ins = await User.create({
        username:body.username,
        email:body.email,
        gender:body.gender,
        token:jwtt,
    })
    res.send(ins)
})
server.get('/getdata',async(req,res)=>{
    const data = await User.findAll()
    res.send(data)
})
server.get('/getbyid/:id',async(req,res)=>{
    const header = Headers[Authorization]
    const idd = req.params.id;
    const getby = await User.findByPk(idd);
    const token = idd.token;
    const vrf = await jwt.verify(token,'shashank')
    if(vrf){
        res.send('token verify')
    }else{
        res.send(getby)
    }
})
server.put('/update/:id',async(req,res)=>{
    const body = req.body;
    const idd = req.params.id;
    const upd = await User.update({
        username:body.username
    },{
        where:{
            id:idd
        }
    }
)
if (upd){
    res.send('updated succes')
}

})
server.delete('/delete/:id',async(req,res)=>{
    const idd = req.params.id;
    const dlt = await User.destroy({
        where:{
            id:idd
        }
    })
    res.send(dlt).json({msg:'deleted succes'})
})

server.listen(9090,()=>console.log('server connected'))