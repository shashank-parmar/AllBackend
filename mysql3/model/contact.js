const { DataTypes, Model } = require('sequelize');
const sequelize = require('../model/index')

const Contact = sequelize.define(
  'Contact',
  {
    // Model attributes are defined here
    Phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Mobile: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'contact',
    createdAt:true,
    updatedAt:'updateTime',
  },
);

// `sequelize.define` also returns the model
console.log(Contact === sequelize.models.Contact); // true

module.exports=Contact;