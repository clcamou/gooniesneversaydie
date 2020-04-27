//import Sequelize library 
const Sequelize = require('sequelize');

const db = {};
//connect to mySQL 
const connection = new Sequelize('remoteClassroom','root', 'yourPasswordGoesHere', {
    // change host when hosted and set up with jawsdb
    host: "localhost", 
    dialect: "mysql",
    operatorsAliases: false,
    
    //setting connectings 
    pool: {
        max: 5, 
        min: 0, 
        acquire: 30000,
        idle: 10000
    }
});

db.sequelize = connection;
db.Sequelize = Sequelize;

module.exports = db; 