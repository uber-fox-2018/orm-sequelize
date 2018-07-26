let View = require("../view/view");
const Model = require("../models");
// const Op = Sequelize.Op;


class ControllerAuthor {
  static c_addAuthor(firstName, lastName, religion, gender, age) {
    Model.Author.create({
      //model.tabelmana?.
      firstName: firstName,
      lastName: lastName,
      religion: religion,
      gender: gender,
      age: age
    })

      .then(data => {
        View.display(data.dataValues);
      })
      .catch(err => {
        View.display(err);
      });
  }

  static c_readOneAuthor(id) {
    Model.Author.findById(id)
      .then(data => {
        let value = data.get({ plain: true });

        View.display(value);
      })
      .catch(err => {
        View.display(err);
      });
  }

  static c_readAllAuthor() {
    Model.Author.findAll({ raw: true })
      .then(data => {
        View.display(data);
      })
      .catch(err => {
        View.display(err);
      });
  }

  static c_updateAuthor(id, value) {
    
    Model.Author.update({ firstName: value }, { where: { id: id } })
      .then(data => {
        View.display(data);
      })
      .catch(err => {
        View.display(err);
      });
  }

  static c_deleteAuthor(id) {
    Model.Author.destroy({ where: { id: id } })
      .then(data => {
        View.display(data);
      })
      .catch(err => {
        View.display(err);
      });
  }
}

// public static update(values: Object, options: Object): Promise<Array<affectedCount, affectedRows>>

module.exports = ControllerAuthor;
