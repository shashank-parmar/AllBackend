const Sequelize = require('sequelize')

const sequelize = new Sequelize('last','root','Shashank2004',{
    host:'localhost',
    dialect:'mysql'

});

sequelize
.authenticate()
.then(()=>console.log('sqequlelixze conneced'))
.catch((err)=>console.log(err,'err from db catch'))


module.exports=sequelize