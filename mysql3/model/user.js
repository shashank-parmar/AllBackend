const { DataTypes, Model } = require('sequelize');
const sequelize = require('../model/index')

const User = sequelize.define(
  'User',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'users',
    createdAt:true,
    updatedAt:true,
  },
);

console.log(User === sequelize.models.User); // true

module.exports=User;