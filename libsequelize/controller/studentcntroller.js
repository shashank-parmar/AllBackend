const db = require('../models/index')
const Student = db.Student;

exports.addstudent = async(req,res)=>{
    const d = req.body;
    const inn = await Student.create({
        name:d.name,
        password:d.password,
        gender:d.gender,
        email:d.email,
    })
    res.send(inn)
}

