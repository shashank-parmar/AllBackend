const express = require('express')

const router = express.Router();

router.post('/post',async(req,res)=>{
    const bd = req.body;
    console.log(bd)
    const ok = await Rest.create({
        id:bd.id,
        fisrtname:bd.fisrtname,
        email:bd.email,
        gender:bd.gender
    })
    console.log(ok)
    res.status(201)
})

router.get('/',async(req,res)=>{
    const dis = await Rest.find({'fisrtname':'harsh'})
    res.send(`<h1>${dis}</h1>`)
})

router.delete('/delete/:id',async(req,res)=>{
    const pr = req.params.id;
    const okk = await Rest.deleteOne({id:pr})
    console.log(okk)
})

router.patch('/update',async(req,res)=>{
    const okay = await Rest.updateOne({ _id: '662b2bce5a33e57d7c1b4ccf' }, { $set: { fisrtname:'savani',email:'savani@gmail.com'}})
    res.send(`<h1>${Rest.find({_id:'662b2bce5a33e57d7c1b4ccf'})}</h1>`)
})

module.exports = router;