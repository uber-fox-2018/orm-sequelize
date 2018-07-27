const View = require('../views/view')
const Model = require('../models/')
const Article = Model.Article
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class ControllerArticle {
    static add(title, body, AuthorId, TagId) {
        Article.create({
            title: title,
            body: body,
            AuthorId: AuthorId,
            TagId: TagId
        })
        .then(data => {
            View.displayMessage(data.dataValues)
        })
        .catch(err => {
            View.displayError(err) 
        })
    }

    static read_one(id) {
        Article.findById(id)
        .then(data => {
            View.displayMessage(data.dataValues)
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static read_all() {
        Article.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
           raw:true
        })
        .then(data => {
            View.displayTable(data)
        })
        .catch(data => {
            View.displayError(err)
        })
    }

    static update(id, column, value) {
        let newObj = {}
        newObj[column] = value
        Article.update(newObj, 
            {
                where: {id: id}, 
                returning: true
            })
        .then(data => {
            let msg = {msg: `success update column = ${column} with value = ${value}`}
            View.displayMessage(msg)
        })
    }

    static erase(id) {
        Article.destroy(
            { 
                where: {id: id}
            })
        .then(data => {
            let msg = {msg: `success deleted data with id = ${id}`}
            View.displayMessage(msg.msg)
        })
        .catch(err => {
            View.displayError(err)
        })
    }
}

module.exports = ControllerArticle