module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      gender: {
        type: DataTypes.STRING
      },
    });
    Student.sync({ force: false })
  
    Student.associate = (models) => {
      Student.hasMany(models.Order, {
        foreignKey: "studentId",
        as: 'orders'
      });
    }
    return Student;
  };
  