const Model = require('../models')
const View  = require('../views/view')

class ControllerArticle {
    static add(title,body,AuthorId,TagId){
        Model.Article.create({
            title: title,
            body: body,
            AuthorId: AuthorId,
            TagId: TagId
        })
        .then((data) => {
            View.showSuccess(data.dataValues)
            
        })
        .catch((err) => {
            View.showError(err)
        })
    }

    static readOne(id){
        Model.Article.findOne({
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
        Model.Article.findAll({
            raw:true
        })
        .then((data) => [
            View.showReadAll(data)
        ])
        .catch((err) => {
            View.showError(err)
        })
    }

    static update(id,title,body,AuthorId,TagId){
        Model.Article.update({
            title: title,
            body: body,
            AuthorId: AuthorId,
            TagId: TagId
        },{
            where: {id:id}
        })
        .then(() => {
            let msg = {msg: `Article with id: ${id} has been updated`}
            View.showSuccess(msg.msg)
        })
        .catch((err) => {
            View.showError(err)
        })
    }

    static remove(id){
        Model.Article.destroy({
            where: {id: id}
        })
        .then(() => {
            let msg = {msg: `Article with id ${id} has been deleted`}
            View.showSuccess(msg.msg)
        })
        .catch((err) => {
            View.showError(err)
        })
    }
}

module.exports = ControllerArticle