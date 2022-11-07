const Sequelize = require("sequelize");
const sequelize = require("./wt2118780.js");

    const Zadatak = sequelize.define("zadatak",{
        naziv:Sequelize.STRING
    });
    
module.exports=Zadatak;

