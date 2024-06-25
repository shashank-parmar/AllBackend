const Sequelize = require('sequelize')
const dbName = 'customer';
const dbUser = 'root';
const password = 'Shashank2004';

const sequelize = new sequelize(dbName,dbUser,password,{
    host:'localhost',
    port:3306,
    dialect:'mysql'
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.customers = require('./customer.model')(Sequelize,sequelize)

module.exports = db;