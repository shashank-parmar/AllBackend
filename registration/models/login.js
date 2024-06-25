module.exports=(sequelize,DataTypes)=>{
    const login = sequelize.define('login',{
        name:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        }
    })
    return login
}