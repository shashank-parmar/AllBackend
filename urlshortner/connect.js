const mongoose = require('mongoose')

async function connectToMongo(){
    mongoose.connect("mongodb://127.0.0.1:27017/url")
}

module.exports={
    connectToMongo,
}