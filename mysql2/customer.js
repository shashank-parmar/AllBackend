const { Sequelize , sequelize } = require('./config')


module.exports=(Sequelize,sequelize)=>{
    const customers = sequeliz.define('customer',{
        name:{
            type:Sequeliz.STRING
        },
        email:{
            type:Sequeliz.STRING,
            primaryKey:true
        },
        age:{
            type:Sequeliz.INTEGER
        }
    })
    return customers;
}