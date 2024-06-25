const db = require('../models/index')
const User = db.User;
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

exports.addUser = async(req,res)=>{
    
    const d = req.body;
    const token = await jwt.sign(d,'Shashank',{expiresIn:'1y'})
    const round = 10;
    const hashpass = await bcrypt.hash(d.password, round);
    d.password = hashpass; 
    const ins = await User.create({
        name:d.name,
        password:d.password,
        email:d.email,
        token:token
    })
    res.send(ins)
}