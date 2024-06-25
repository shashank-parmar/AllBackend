const { Sequelize,DataTypes,Model} = require('sequelize')

const sequelize = new Sequelize('mvc','root','Shashank2004',{
    host:'localhost',
    dialect:'mysql'
});

sequelize
.authenticate()
.then(()=>console.log('db connected'))
.catch((err)=>console.log('db eerro',err))

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize,DataTypes,Model)
db.employee = require('./employee')(sequelize,DataTypes,Model)


db.User.hasOne(db.employee);
db.employee.belongsTo(db.User);


sequelize.sync({force:false})

module.exports = db;