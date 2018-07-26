'use strict';
module.exports = (sequelize, DataTypes) => {
  var Authors = sequelize.define('Authors', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    religion: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  Authors.associate = function(models) {
    // associations can be defined here
  };
  return Authors;
};