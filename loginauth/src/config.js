const mongoose = require('mongoose')
mongoose
.connect('mongodb://localhost:27017/login')
.then(()=>console.log('database connected succesfully'))
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
    token:{
        type:String,
        require:true,
    }
}, { timestamps:true })

const user =  mongoose.model('user',userSchema);

module.exports = user;


