const Model = require('../models')
const View  = require('../views/view')

class ControllerAuthor {
    static add(first_name,last_name,religion,gender,age){
        Model.Author.create({
            first_name: first_name,
            last_name: last_name,
            religion: religion,
            gender: gender,
            age: age
        })
        .then((data) => {
            View.showSuccess(data.dataValues)
            
        })
        .catch((err) => {
            View.showError(err)
        })
    }

    static readOne(id){
        Model.Author.findOne({
            where: {id: id}
        })
        .then((data) => {
            View.showReadOne(data.dataValues)
        })
        .catch((err) => {
            View.showError(err)
        })
    }

    static readAll(){
        Model.Author.findAll({
            raw:true
        })
        .then((data) => [
            View.showReadAll(data)
        ])
        .catch((err) => {
            View.showError(err)
        })
    }

    static update(id,first_name,last_name,religion,gender,age){
        Model.Author.update({
            first_name: first_name,
            last_name: last_name,
            religion: religion,
            gender: gender,
            age: age
        },{
            where: {id:id}
        })
        .then(() => {
            let msg = {msg: `data with id: ${id} has been updated`}
            View.showSuccess(msg.msg)
        })
        .catch((err) => {
            View.showError(err)
        })
    }

    static remove(id){
        Model.Author.destroy({
            where: {id: id}
        })
        .then((data) => {
            let msg = {msg: `Author with id ${id} has been deleted`}
            View.showSuccess(msg.msg)
        })
        .catch((err) => {
            View.showError(err)
        })
    }
}

module.exports = ControllerAuthor