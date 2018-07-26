const Model = require('../models')
const view = require('../view/author')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
let msg = ''

class Author {
  static add(...data) {
    if (data.length === 5) {
      Model.Author.create({
        first_name: data[0],
        last_name: data[1],
        religion: data[2],
        gender: data[3],
        age: data[4]
      })
        .then(data => {
          view.showAddSuccess(data.dataValues)
        })
        .catch(err => {
          view.showMessageErr(err.message)
        })
    }
  }

  static readOne(...data) {
    let id = data[0]

    Model.Author.findById(id)
      .then(data => {
        if (data === null) {
          msg = 'Data is empty!'
          view.showMessage(msg)
        } else {
          view.showFindAuthor(data.dataValues)
        }
      })
      .catch(err => {
        view.showMessageErr(err.message)
      })
  }

  static readAll() {
    Model.Author.findAll()
      .then(data => {
        if (data === null) {
          msg = 'Data is empty!'
          view.showMessage(msg)
        } else {
          view.showListAuthor(data)
        }
      })
      .catch(err => {
        view.showMessageErr(err.message)
      })
  }

  static update(...data) {
    let id = data[0]

    Model.Author.update({
      first_name: data[1],
      last_name: data[2],
      religion: data[3],
      gender: data[4],
      age: data[5]
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

    Model.Author.destroy({
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

// Author.remove(1)
// Author.add('Ari', 'Supriatna', 'Islam', 'male', 19)
// Author.update(2, 'Arie', 'Supriatna', 'Islam', 'Male', 20)
module.exports = Author