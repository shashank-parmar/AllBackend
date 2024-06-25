const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('blog','root','Shashank2004',{
    host:'localhost',
    dialect:'mysql'
})

sequelize
.authenticate()
.then(()=>console.log('mysql sequelize DB connected'))
.catch((err)=>console.log(err,'db error'))

module.exports=sequelize;
