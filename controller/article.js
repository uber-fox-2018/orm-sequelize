const Model = require('../models')
const view = require('../view/article')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
let msg = ''

class Article {
  static add(...data) {
    if (data.length === 4) {
      Model.Article.create({
        title: data[0],
        body: data[1],
        AuthorId: data[2],
        TagId: data[3]
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

    Model.Article.findById(id)
      .then(data => {
        if (data === null) {
          msg = 'Data is empty'
          view.showMessage(msg)
        } else {
          view.showFindArticle(data.dataValues)
        }
      })
      .catch(err => {
        view.showMessageErr(err)
      })
  }

  static readAll() {
    Model.Article.findAll()
      .then(data => {
        if (data === null) {
          msg = 'Data is empty!'
          view.showMessage(msg)
        } else {
          view.showAListArticle(data)
        }
      })
      .catch(err => {
        view.showMessageErr(err.message)
      })
  } 

  static update(...data) {
    let id = data[0]

    Model.Article.update({
      title: data[1],
      body: data[2],
      AuthorId: data[3],
      TagId: data[4]
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
        view.showMessageErr(err)
      })
  }

  static remove(...data) {
    let id = data[0]

    Model.Article.destroy({
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

module.exports = Article