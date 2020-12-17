'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('todos', [{
      name: 'Name Task #1',
      title: 'Title Task #1',
      completed: false
    }, {
      name: 'Name Task #2',
      title: 'Title Task #2',
      completed: false
    }, {
      name: 'Name Task #3',
      title: 'Title Task #3',
      completed: false
    }]);

  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('todos', null, {});
    
  }
};
