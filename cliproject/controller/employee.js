const db = require('../model/index')
const employee = db.employee;

const emp = async(req,res)=>{
    const bd = req.body;
    const inn = await employee.create({
        firstname:bd.firatname,
        email:bd.email,
        salary:bd.salary,
        UserId:bd.UserId,
    })
    res.send(inn)
}

const getdata = async (req, res) => {
    const get = await db.User.findAll({
        attributes: ['id', 'firstname', 'email','gender'],
        include: [
          {
            model: db.employee,
            attributes: ['id', 'firstname', 'email', 'salary']
          },
        ],
    })
    res.send(get)
}
     
      

module.exports={
    emp,
    getdata,
}