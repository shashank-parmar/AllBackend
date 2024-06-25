const mongoose  = require('mongoose')

mongoose
.connect('mongodb://localhost:27017/email')
.then(()=>console.log('DB connected Succesfully'))
.catch((err)=>console.log(err))

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    token:{
        type:String,
        require:true,
    }
},{ timestamps:true })

const User = mongoose.model('User',userSchema)

module.exports = User