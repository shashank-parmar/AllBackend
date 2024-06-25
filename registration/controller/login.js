const { where } = require('sequelize');
const db = require('../models/index')
const bcrypt = require('bcrypt');

const User = db.User
const login = db.login;

const jwt = require('jsonwebtoken')

exports.login = async(req,res)=>{
    const body = req.body;
    const fnd = await User.findAll({
        where:{
            name:body.name
        }
    })
    console.log(fnd)
    const match = await bcrypt.compare(body.password, fnd.password);
    if(match){
        res.send("login succes")
    }else{
        console.log("password is wrong")
    }
    
}