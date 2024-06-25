module.exports = (sequelize, DataTypes) => {
    const Orderbook = sequelize.define('Orderbook', {
        UserId:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        bookname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Orderbook.sync({ force: false }); // Corrected the typo here

    Orderbook.associate=(models)=>{
        Orderbook.belongsTo(models.User,{
            foreignKey:'UserId',
        })
    }


    return Orderbook;
};
