'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    religion: DataTypes.INTEGER,
    gender: DataTypes.INTEGER,
    age: DataTypes.INTEGER
  }, {});
  Author.associate = function(models) {
    // associations can be defined here
  };
  return Author;
};