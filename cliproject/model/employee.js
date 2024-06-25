module.exports = (sequelize,DataTypes,Model)=>{
    class employee extends Model{}
    employee.init({
        firstname:{
            type:DataTypes.STRING,
        },
        email:{
            type:DataTypes.STRING,
        },
        salary:{
            type:DataTypes.STRING,
        },
        UserId: {
            type: DataTypes.INTEGER,
            References: {
                modelName:'User',
                key: 'id'
            }
        },
    },{
        sequelize,
        modelName:'employee',
    });
    return employee;
}