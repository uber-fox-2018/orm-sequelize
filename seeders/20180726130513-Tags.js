'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags',[{
      name : 'alhamduliah',
      createdAt:new Date,
      updatedAt: new Date
    },{
      name : 'wasyukurilah',
      createdAt:new Date,
      updatedAt: new Date
    },{
      name : 'ajeb',
      createdAt:new Date,
      updatedAt: new Date
    },{
      name : 'nononow',
      createdAt:new Date,
      updatedAt: new Date
    },{
      name : 'cukicuki',
      createdAt:new Date,
      updatedAt: new Date
    },{
      name : 'liam',
      createdAt:new Date,
      updatedAt: new Date
    }])
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('tag',null,{});
  }
};
