const Sequelize = require("sequelize");
const sequelize = require("./wt2118780.js");
    const Vjezba = sequelize.define("vjezba",{
        naziv:Sequelize.STRING
    });
    
module.exports=Vjezba;

    

