const View = require('../views/view')
const Model = require('../models/')
const Tag = Model.Tag
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class ControllerTag {
    static add(name) {
        Tag.create({
           name: name
        })
        .then(data => {
            View.displayMessage(data.dataValues)
        })
        .catch(err => {
            View.displayError(err) 
        })
    }

    static read_one(id) {
        Tag.findById(id)
        .then(data => {
            View.displayMessage(data.dataValues)
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static read_all() {
        Tag.findAll({
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
        Tag.update(newObj, 
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
        Tag.destroy(
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

module.exports = ControllerTag