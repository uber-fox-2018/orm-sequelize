'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Authors',[{
      first_name: "erwin",
      last_name: "ramadhan",
      religion: "islam",
      gender:"male",
      age:20,
      createdAt:new Date,
      updatedAt: new Date
    },{
      first_name: "alex",
      last_name: "gunawan",
      religion: "islam",
      gender:"male",
      age:22,
      createdAt:new Date,
      updatedAt: new Date
    },{
      first_name: "budi",
      last_name: "stener",
      religion: "islam",
      gender:"male",
      age:32,
      createdAt:new Date,
      updatedAt: new Date
    },{
      first_name: "cumin",
      last_name: "santoso",
      religion: "islam",
      gender:"male",
      age:43,
      createdAt:new Date,
      updatedAt: new Date
    },{
      first_name: "erwin",
      last_name: "lokoko",
      religion: "islam",
      gender:"male",
      age:12,
      createdAt:new Date,
      updatedAt: new Date
    }],{});
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('author',null,{});
  }
};
