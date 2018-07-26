let View = require("../view/view");
const Model = require("../models");
// const Op = Sequelize.Op;


class ControllerArticle {
  static c_addArticle(title, body, authorId, tagId) {
    Model.Article.create({
      title: title,
      body: body,
      AuthorId: authorId,
      TagId: tagId
    })
      .then(data => {
        View.display(data.dataValues);
      })
      .catch(err => {
        View.display(err);
      });
  }

  static c_findArticle(id) {
    Model.Article.findById(id)
      .then(data => {
        let value = data.get(
          {
            where: { [Op.like]: "superman" }
          },
          { plain: true }
        );
        View.display(value);
      })
      .catch(err => {
        View.display(err);
      });
  }

  static c_findAllArticle() {
    Model.Article.findAll(
      {
        where: { [Op.gte]: 5 }
      },
      { raw: true }
    )
      .then(data => {
        View.display(data);
      })
      .catch(err => {
        View.display(err);
      });
  }

  static c_updateArticle(id, value) {
    Model.Article.update({ title: value }, { where: { id: id } })
      .then(data => {
        View.display(data);
      })
      .catch(err => {
        View.display(err);
      });
  }

  static c_deleteArticle(id) {
    Model.Article.destroy({
      where: { [Op.in]: [{ id: 1 }, { id: 3 }] }
    })
      .then(data => {
        View.display(data);
      })
      .catch(err => {
        View.display(err);
      });
  }
}

// public static update(values: Object, options: Object): Promise<Array<affectedCount, affectedRows>>

module.exports = ControllerArticle;
