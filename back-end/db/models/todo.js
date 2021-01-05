'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  task.init({
    id: {
      type:           DataTypes.INTEGER,
      autoIncrement: 	true,
      primaryKey:     true,
      unique:         true,
      allowNull:      false,
    },
    title: {
      type:           DataTypes.STRING(100),
      allowNull:      false,
      validate:       { min: 1, max: 200 }
    },
    description: {
      type:           DataTypes.TEXT,
      allowNull:      false
    },
    completed: {
      type:           DataTypes.BOOLEAN,
      allowNull:      false,
      defaultValue:   false
    }
  }, {
    sequelize,
    modelName:    'tasks',
    timestamps:   true,
    createdAt:    'created_at',
    updatedAt:    'updated_at'
  });
  return task;
};