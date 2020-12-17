'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('todos', {
      id: {
        allowNull:      false,
        autoIncrement:  true,
        primaryKey:     true,
        type:           Sequelize.INTEGER
      },
      name: {
        type:           Sequelize.STRING(100),
        allowNull:      false,
      },
      title: {
        type:           Sequelize.STRING(100),
        allowNull:      false,
      },
      completed: {
        type:           Sequelize.BOOLEAN,
        allowNull:      false,
        defaultValue:   false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('todos');
  }
};