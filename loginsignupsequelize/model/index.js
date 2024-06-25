const { Sequelize,DataTypes,Model} = require('sequelize')

const sequelize = new Sequelize('login','root','Shashank2004',{
    host:'localhost',
    dialect:'mysql',
})

sequelize
.authenticate()
.then(()=>console.log('db connected'))
.catch((err)=>console.log('db err'))

const db = {}
db.sequelize=sequelize;
db.Sequelize=Sequelize;

db.user = require('./user')(sequelize,DataTypes,Model)

sequelize.sync({force:false})

module.exports = db;