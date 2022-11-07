const Sequelize = require("sequelize");
const sequelize = require("./wt2118780.js");
    const Student = sequelize.define("student",{
        ime:Sequelize.STRING,
        prezime:Sequelize.STRING,
        index:Sequelize.STRING,
        grupa:Sequelize.STRING
    });
    
module.exports=Student;


