const Sequelize = require("sequelize");
const sequelize = require("./wt2118780.js");
    const Grupa = sequelize.define("grupa",{
        naziv:Sequelize.STRING
    });
 
module.exports=Grupa;
