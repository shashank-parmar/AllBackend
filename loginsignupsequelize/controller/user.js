const db = require('../model/index')
const User = db.User;

const ins = async(req,res)=>{
    const bd = req.body;
    const okk = await db.User.create({
        firstname:bd.username,
        password:bd.password,
       
    })
    res.send(okk)
}

module.exports={
    ins,
}