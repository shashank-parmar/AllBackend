const { DataTypes } = require('sequelize');
const sequelize = require('../model/index');

const Employee = sequelize.define('employee', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salary: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  UserId: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    references: {
      model: 'User',
      key: 'id'
    }
  }
});

module.exports = Employee;
