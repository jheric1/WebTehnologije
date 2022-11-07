const Sequelize = require("sequelize");
const sequelize = new Sequelize('wt2118780','root','password',
{host:'localhost',
dialect:'mysql',
pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
},
logging:false
});
module.exports=sequelize;