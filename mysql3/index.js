const express = require('express')
const bodyParser = require('body-parser')
const { Op } = require("sequelize");
const app = express();
require('./model/index')
const User = require('./model/user')
const Contact = require('./model/contact')

app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
User.sync();
Contact.sync();
// User.drop();

app.post('/post',async(req,res)=>{
    const body = req.body;
    const ok = await User.create({
        firstName:body.firstName,
        lastName:body.lastName
    })
    res.send(ok)
})
app.get('/getdata',async(req,res)=>{
    const getdata = await User.findAll()
    // const okkkk = await sequelize.query('select * from users')
    res.send(getdata)
    // const body = req.body;
    // const fndop = await User.findOne({
    //     where:{
    //         firstName:{
    //             [Op.eq]:body.firstName
    //         }
    //     }
    // }).then(()=>{
    //     if(fndop){
    //         console.log('user found')
    //     }else{
    //         console.log('user not found')
    //     }
    // }).catch((err)=>console.log(err,'err from catch'))
    // res.send('all okk')
})
app.post('/getdata', async (req, res) => {
    const body = req.body;
    try {
        const fndop = await User.findOne({
            where:{
                 firstName:{
                     [Op.eq]:body.firstName
                 }
             }
        });
        console.log(fndop)
        if (fndop) {
            console.log('user found')
        } else {
            console.log('user not found')
        }
        res.send('all okk');
    } catch (err) {
        console.log(err, 'err from catch');
        res.status(500).send('Error');
    }
});


app.get('/getbyid/:id',async(req,res)=>{
    const body = req.params.id;
    const find = await User.findByPk(body)
    res.send(find)
})

app.delete('/delete/:id',async(req,res)=>{
    const id = req.params.id;
    const deletedata = await User.findByPk(id)
    console.log(deletedata,'dddddddddddddddd')
    const okk = await deletedata.destroy()
    // User.destroy({
    //     where:{
    //         id:req.params.id;
    //     }
    // })
    res.send(okk)
})

app.put('/update/:id',async(req,res)=>{
    const body = req.body;
    const idd = req.params.id;
    User.update({
        firstName:body.firstName,
        lastName:body.lastName
    },{
        where:{
            id:idd
        }
    })
    res.send('okkk')
})

app.listen(8000)