const View = require('../views/author_view');
const models = require('../models');

class AuthorController {
  constructor() { }
  help() {
    View.displayHelp();
  }

  readAll() {
    models
      .Author
      .findAll()
      .then(authors => View.displayAll(authors))
      .catch(err => View.displayError(err))
  }

  readOne(id) {
    models
      .Author
      .find({ where: { id } })
      .then(author => View.displayOne(author))
      .catch(err => View.displayError(err))
  }

  add(firstName, lastName, religion, gender, age) {
    models
      .Author
      .create({ firstName, lastName, religion, gender, age })
      .then(newAuthor => View.displayAddSuccess(newAuthor))
      .catch(err => View.displayError(err))
  }

  update(id, firstName, lastName, religion, gender, age) {
    models
      .Author
      .update({ firstName, lastName, religion, gender, age }, { where: { id } })
      .then(results => results[0] ?
        View.displayUpdateSuccess(id) :
        View.displayDataNotFound())
      .catch(err => View.displayError(err))
  }

  delete(id) {
    models
      .Author
      .destroy({ where: { id } })
      .then(status => status ?
        View.displayDeleteSuccess(id) :
        View.displayDataNotFound())
      .catch(err => View.displayError(err))
  }
}

module.exports = AuthorController;