'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull:      false,
        autoIncrement:  true,
        primaryKey:     true,
        type:           Sequelize.INTEGER
      },
      title: {
        type:           Sequelize.STRING(100),
        allowNull:      false,
      },
      description: {
        type:           Sequelize.TEXT,
        allowNull:      false,
      },
      completed: {
        type:           Sequelize.BOOLEAN,
        allowNull:      false,
        defaultValue:   false
      },
      created_at: {
        type:           Sequelize.DATE,
        allowNull:      false,
        defaultValue:   Sequelize.NOW
      },
      updated_at: {
        type:           Sequelize.DATE,
        allowNull:      false,
        defaultValue:   Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tasks');
  }
};