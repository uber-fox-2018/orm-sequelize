'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Authors', [{
     first_name: 'Monica',
     last_name: 'Hilbert',
     religion: 'Christian',
     gender: 'female',
     age: 42
   }, {
     first_name: 'Billy',
     last_name: 'Madison',
     religion: 'Agnostic',
     gender: 'male',
     age: 35
   }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
