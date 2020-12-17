'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  todo.init({
    id: {
      type:           DataTypes.INTEGER,
      autoIncrement: 	true,
      primaryKey:     true,
      unique:         true,
      allowNull:      false,
    },
    name: {
      type:           DataTypes.STRING(100),
      allowNull:      false,
      validate:       { min: 1, max: 100 }
    },
    title: {
      type:           DataTypes.STRING(100),
      allowNull:      false,
      validate:       { min: 1, max: 200 }
    },
    completed: {
      type:           DataTypes.BOOLEAN,
      allowNull:      false,
      defaultValue:   false
    }
  }, {
    sequelize,
    modelName:    'todos',
    timestamps:   false
  });
  return todo;
};