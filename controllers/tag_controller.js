const View = require('../views/tag_view')
const models = require('../models')

class TagController {
  constructor() { }
  readAll() {
    models
      .Tag
      .findAll()
      .then(tags => View.displayAll(tags))
      .catch(err => View.displayError(err))
  }

  readOne(id) {
    models
      .Tag
      .find({ where: { id } })
      .then(tag => View.displayOne(tag))
      .catch(err => View.displayError(err))
  }

  add(name) {
    models
      .Tag
      .create({ name })
      .then(tag => View.displayAddSuccess(tag))
      .catch(err => View.displayError(err))
  }

  update(id, name) {
    models
      .Tag
      .update({ name }, { where: { id } })
      .then(results => results[0] ?
        View.displayUpdateSuccess(id) :
        View.displayDataNotFound())
      .catch(err => View.displayError(err))
  }

  delete(id) {
    models
      .Tag
      .destroy({ where: { id } })
      .then(status => status ?
        View.displayDeleteSuccess(id) :
        View.displayDataNotFound())
      .catch(err => View.displayError(err))
  }
  help() {
    View.displayHelp()
  }
}

module.exports = TagController;