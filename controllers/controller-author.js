const View = require('../views/view')
const Model = require('../models/')
const Author = Model.Author
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class ControllerAuthor {
    static add(first_name, last_name, religion, gender, age) {
        Author.create({
            first_name: first_name,
            last_name: last_name,
            religion: religion,
            gender: gender,
            age: age
        })
        .then(data => {
            View.displayMessage(data.dataValues)
        })
        .catch(err => {
            View.displayError(err) 
        })
    }

    static read_one(id) {
        Author.findById(id)
        .then(data => {
            View.displayMessage(data.dataValues)
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static read_all() {
        Author.findAll({
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
        Author.update(newObj, 
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
        Author.destroy(
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

module.exports = ControllerAuthor