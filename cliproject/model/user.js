module.exports = (sequelize,DataTypes,Model)=>{
    class User extends Model{}
    User.init({
        firstname:{
            type:DataTypes.STRING,
        },
        email:{
            type:DataTypes.STRING,
        },
        gender:{
            type:DataTypes.STRING,
        },
    },{
        sequelize,
        modelName:'User',
    });
    return User;
}