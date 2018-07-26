'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles',[{
      title: "mantap jos",
      body: "goks goks",
      AuthorId: 1,
      TagId:1,
      createdAt:new Date,
      updatedAt: new Date
    },{
      title: "goks jos",
      body: "mtgoks",
      AuthorId: 1,
      TagId:2,
      createdAt:new Date,
      updatedAt: new Date
    },{
      title: "nice",
      body: "mimimi",
      AuthorId: 2,
      TagId:1,
      createdAt:new Date,
      updatedAt: new Date
    },{
      title: "cintaku",
      body: "blabla",
      AuthorId: 2,
      TagId:3,
      createdAt:new Date,
      updatedAt: new Date
    },{
      title: "bersama",
      body: "jalanan",
      AuthorId: 3,
      TagId:2,
      createdAt:new Date,
      updatedAt: new Date
    },{
      title: "polisi",
      body: "coyy",
      AuthorId: 4,
      TagId:1,
      createdAt:new Date,
      updatedAt: new Date
    }])
  },

  down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('article',null,{});
  }
};
