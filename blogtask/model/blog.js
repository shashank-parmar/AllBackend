const mongoose = require('mongoose')


mongoose
.connect('mongodb://localhost:27017/blog')
.then(()=>console.log('Db connected'))
.catch((err)=>{console.log(err)})

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
        maxlength: 100,
    },
    content:{
        type:String,
        require:true,
        maxlength:1000,
    },
    author:{
        type:String,
        require:true,
    }
},{timestamps:true})

const book = mongoose.model('book',bookSchema);

module.exports = book;