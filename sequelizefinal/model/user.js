const { DataTypes } = require('sequelize');
const sequelize = require('../model/index');

const User = sequelize.define(
    'User', 
    {
        firstName: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING, 
            allowNull: false,
        }
    },
    {
        tableName: 'user',
        createdAt: true,
        updatedAt: true,
    }
);

module.exports = User;
