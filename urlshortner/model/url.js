const { timeStamp } = require('console')
const mongoose = require('mongoose')
const { short } = require('webidl-conversions')

const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        require:true
    },
    visitHistory:[{timeStamp:{type:Number}}]
},{timeStamp :true})

const URL = mongoose.model('URL',urlSchema)

module.exports=URL