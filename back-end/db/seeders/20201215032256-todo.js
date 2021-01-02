'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('tasks', [{
      title: 'Design Screen',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis quaerat dolores tenetur iste similique optio quas, ducimus vitae laboriosam nam obcaecati suscipit sapiente voluptatibus doloribus quae explicabo quidem dignissimos?',
      completed: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      title: 'Buy Coffee',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis quaerat dolores tenetur iste similique optio quas, ducimus vitae laboriosam nam obcaecati suscipit sapiente voluptatibus doloribus quae explicabo quidem dignissimos?',
      completed: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      title: 'Design Screen',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis quaerat dolores tenetur iste similique optio quas, ducimus vitae laboriosam nam obcaecati suscipit sapiente voluptatibus doloribus quae explicabo quidem dignissimos?',
      completed: false,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      title: 'Buy Coffee',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis quaerat dolores tenetur iste similique optio quas, ducimus vitae laboriosam nam obcaecati suscipit sapiente voluptatibus doloribus quae explicabo quidem dignissimos?',
      completed: false,
      created_at: new Date(),
      updated_at: new Date()
    }]);

  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('tasks', null, {});
    
  }
};
