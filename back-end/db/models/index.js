'use strict';

const
  FileSystem =        require('fs'),
  Path =              require('path'),
  Sequelize =         require('sequelize'),
  Basename =          Path.basename(__filename),
  DB =                {},
  SequelizeConnect =  require('../sequelize/sequelize.connect');
;

let sequelize =   SequelizeConnect._getInstance()._connection;

FileSystem
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== Basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(Path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    DB[model.name] = model;
  });

Object.keys(DB).forEach(modelName => {
  if (DB[modelName].associate) {
    DB[modelName].associate(DB);
  }
});

DB.sequelize = sequelize;
DB.Sequelize = Sequelize;

module.exports = DB;