const mongoose = require('mongoose')

mongoose
.connect("mongodb://localhost:27017/passport")
.then(()=>console.log("mongo db connect"))
.catch((err)=>console.log("catch err"))

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
})

const User = mongoose.model('User',UserSchema)
module.exports = User;