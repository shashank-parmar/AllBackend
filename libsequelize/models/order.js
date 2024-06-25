module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    });
  
    Order.associate = (models) => {
      Order.belongsTo(models.Student, {
        foreignKey: "studentId"
      });
      Order.belongsTo(models.Book, {
        foreignKey: "bookId"
      });
    };
  
    return Order;
  };
  