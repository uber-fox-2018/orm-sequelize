const Model = require('../models')
const view = require('../view/tag')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
let msg = ''

class Tag {
  static add(...data) {
    if (data.length === 1) {
      Model.Tag.create({
        name: data[0]
      })
        .then(data => {
          view.showAddSuccess(data.dataValues)
        })
        .catch(err => {
          view.showMessageErr(err.message)
        })
    } else {
      msg = `Sorry, the data can not be input. Please check again.`
      view.showMessage(msg)
    }
  }

  static readOne(...data) {
    let id = data[0]

    Model.Tag.findById(id)
      .then(data => {
        if (data === null) {
          msg = "Data is empty."
          view.showMessage(msg)
        } else {
          view.showFindTag(data.dataValues)
        }
      })
      .catch(err => {
        view.showMessageErr(err.message)
      })
  }

  static readAll() {
    Model.Tag.findAll()
      .then(data => {
        if (data === null) {
          msg = 'Data is empty!'
          view.showMessage(msg)
        } else {
          view.showListTag(data)
        }
      })
  }

  static update(...data) {
    let id = data[0]

    Model.Tag.update({
      name: data[1]
    }, {
      where: {
        id: {
          [Op.eq]: id
        }
      }
    })
      .then(data => {
        if (data[0] === 1) {
          msg = `Data with id ${id} successfully updated.`
          view.showMessage(msg)
        } else {
          msg = `Sorry, data with id ${id} not found!`
          view.showMessage(msg)
        }
      })
      .catch(err => {
        view.showMessageErr(err.message)
      })
  }

  static remove(...data) {
    let id = data[0]

    Model.Tag.destroy({
      where: {
        id: {
          [Op.eq]: id
        }
      }
    })
      .then(data => {
        if (data === 1) {
          msg = `Data with id ${id} successfully deleted`
          view.showMessage(msg)
        } else {
          msg = `Data with id ${id} has been deleted`
          view.showMessage(msg)
        }
      })
      .catch(err => {
        view.showMessageErr(err.message)
      })
  }
}

module.exports = Tag