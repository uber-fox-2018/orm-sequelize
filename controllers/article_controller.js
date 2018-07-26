const View = require('../views/article_view');
const models = require('../models');

class ArticleController {
  constructor() { }
  help() {
    View.displayHelp();
  }
  readAll() {
    models
      .Article
      .findAll()
      .then(articles => View.displayAll(articles))
      .catch(err => View.displayError(err))
  }

  readOne(id) {
    models
      .Article
      .find({ where: { id } })
      .then(article => View.displayOne(article))
      .catch(err => View.displayError(err))
  }

  add(title, body, authorId, tagId) {
    models
      .Article
      .create({ title, body, authorId, tagId })
      .then(article => View.displayAddSuccess(article))
      .catch(err => View.displayError(err))
  }

  update(id, title, body, authorId, tagId) {
    models
      .Article
      .update({ title, body, authorId, tagId }, { where: { id } })
      .then(results => results[0] ?
        View.displayUpdateSuccess(id) :
        View.displayDataNotFound())
      .catch(err => View.displayError(err))
  }

  delete(id) {
    models
      .Article
      .destroy({ where: { id } })
      .then(status => status ?
        View.displayDeleteSuccess(id) :
        View.displayDataNotFound())
      .catch(err => View.displayError(err))
  }
}

module.exports = ArticleController;