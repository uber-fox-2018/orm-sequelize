let View = require("../view/view");
const Model = require("../models");
var Sequelize = require('./sequelize');
// var sequelize = require('../config/db.js')
// let Op = Sequelize.Op;


class ControllerTag {
  static c_addTag(input) {
    Model.Tag.create({
      name: input
    })
      .then(data => {
        View.display(data.dataValues);
      })
      .catch(err => {
        View.display(err);
      });
  }

  static c_readTag(id) {
    Model.Tag.findById(id)
      .then(data => {
        let value = data.get({ plain: true });
        View.display(value);
      })
      .catch(err => {
        View.display(err);
      });
  }

  static c_readAllTag() {
    Model.Tag.findAll(
      {
        [Op.or]: [{authorId: 12}, {authorId: 13}]
    },
      { raw: true }
    )
      .then(data => {
        View.display(data[0].dataValues);
      })
      .catch(err => {
        View.display(err);
      });
  }

  static c_updateTag(id, value) {
    Model.Tag.update({ name: value }, { where: { id: id } })
      .then(data => {
        View.display(data);
      })
      .catch(err => {
        View.display(err);
      });
  }

  static c_deleteTag(id) {
    Model.Tag.destroy({ where: { id: id } })
      .then(data => {
        View.display(data);
      })
      .catch(err => {
        View.display(err);
      });
  }
}

// public static update(values: Object, options: Object): Promise<Array<affectedCount, affectedRows>>

module.exports = ControllerTag;
