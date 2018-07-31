'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          args: true,
          msg: 'Wrong First Name Format!'
        },
        notNull: {
          msg: 'ERROR! first name is empty...'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: 'Wrong Last Name Format!'
        },
        notNull: {
          msg: 'ERROR! last name is empty...'
        }
      }
    },
    religion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'ERROR! religion name is empty...'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      notNull: false,
      validate: {
        isAlpha: {
          msg: 'Wrong Gender Format!'
        },
        isLowercase: {
          msg: 'Please Input to Lower Case!'
        },
        isIn: {
          args: [
            ['male', 'female']
          ],
          msg: 'Gender Must be Male or Female!'
        },
        notNull: {
          msg: 'ERROR! gender is empty...'
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: 'Age Must be Numbers!'
        },
        notNull: {
          msg: 'ERROR! age is empty...'
        }
      }
    }
  }, {});
  Author.associate = function (models) {
    // associations can be defined here
  };
  return Author;
};