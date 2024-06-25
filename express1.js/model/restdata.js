const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    fisrtname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    gender:{
        type:String
    }
})

const Rest = mongoose.model('Rest',dataSchema);

module.exports = Rest;  