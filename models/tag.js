'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.hasOne(models.Article, {
      foreignKey: 'id_tag',
      as: 'tag',
    });
  };
  return Tag;
};