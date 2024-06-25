const db = require('../model/index')
const User = db.User;

const ins = async(req,res)=>{
    const body = req.body;
    const okk = await User.create({
        firstname:body.firstname,
        email:body.email,
        gender:body.gender,
    })
    res.send(okk)
}

module.exports={
    ins,
}