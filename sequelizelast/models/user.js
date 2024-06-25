const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        token: {
            type: DataTypes.STRING(1000),
            allowNUll:false
        }
    });

    User.sync({ force: false });

    User.associate = (models)=>{
        User.hasMany(models.Orderbook,{
            foreignKey:'UserId',
            as:'Orderbook'
        })
    }

    return User;
};
