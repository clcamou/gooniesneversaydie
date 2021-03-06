//import Sequelize library 
const Sequelize = require('sequelize');
let path = require("path");
let appRoot = require("app-root-path")
//connect to database
const db = require('./database/db');

//define the model with field of database
let Assignments = db.sequelize.define(
  'Assignments',
  {
    assignment_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    assignment_name: {
      type: Sequelize.STRING
    },
    class_id: {
      type: Sequelize.INTEGER 
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },{
    classMethods:{
      getAssignmentsForClass: function(id){
        this.findAll({
          where: {
            class_id: id
          }
        }).then(function(res){
          return res
        })
      }
    }
  }
);

module.exports = Assignments