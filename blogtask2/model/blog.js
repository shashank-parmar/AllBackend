const { DataTypes } = require('sequelize')
const sequelize = require('../model/index')

const Blog = sequelize.define(
    'Blog',
    {
        title:{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
        content:{
            type:DataTypes.STRING(1000),
            allowNull:false,
        },
        author:{
            type:DataTypes.STRING,
            allowNull:false,
        }

},
    {
        tableName:'blog',
        createdAt:true,
        updatedAt:true,
    }
)

module.exports=Blog;