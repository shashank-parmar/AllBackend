const mongoose = require('mongoose')

async function conn(){
    mongoose
        .connect('mongodb://127.0.0.1:27017/rest')
        .then(()=>console.log('successs'))
        .catch((err)=>console.log(err))
}


module.exports = {
    conn,
};
