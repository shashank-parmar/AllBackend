const user = require('../model/user')

async function handleUserCreate(req,res){
    const { name, email,password} = req.body;
    await user.create({
        name,
        email,
        passwords
    })
    res.render("home")

}

async function html(req,res){    
    return res.send('<h1>shashanks</h1>')
}

module.exports = {
    handleUserCreate,html,
}