const Model = require('../models')
const View  = require('../views/view')

class ControllerTag {
    static add(name){
        Model.Tag.create({
            name: name
        })
        .then((data) => {
            View.showSuccess(data.dataValues)
            
        })
        .catch((err) => {
            View.showError(err)
        })
    }

    static readOne(id){
        Model.Tag.findOne({
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
        Model.Tag.findAll({
            raw:true
        })
        .then((data) => [
            View.showReadAll(data)
        ])
        .catch((err) => {
            View.showError(err)
        })
    }

    static update(id,name){
        Model.Tag.update({
            name: name
        },{
            where: {id:id}
        })
        .then(() => {
            let msg = {msg: `Tag with id: ${id} has been updated`}
            View.showSuccess(msg.msg)
        })
        .catch((err) => {
            View.showError(err)
        })
    }

    static remove(id){
        Model.Tag.destroy({
            where: {id: id}
        })
        .then((data) => {
            let msg = {msg: `Tag with id ${id} has been deleted`}
            View.showSuccess(msg.msg)
        })
        .catch((err) => {
            View.showError(err)
        })
    }
}

module.exports = ControllerTag