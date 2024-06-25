module.exports=(sequelize,DataTypes)=>{
    const User = sequelize.define('User',{
        name:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        },
        token:{
            type:DataTypes.STRING
        }
    })
    User.sync({force:false})

    return User;
}