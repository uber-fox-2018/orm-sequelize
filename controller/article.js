const Model = require('../models/index')
const View = require('../view/article')

class Controller{

    static add(title,body,authorId,tagId) {
        Model.Articles
            .create(
                {
                    title: title,
                    body: body,
                    AuthorId: authorId,
                    TagId: tagId
                }
            )
            .then(function () {
                View.add()
            })
            .catch(function () {
                View.errAdd()
            })
    }

    static read_one(id) {
        Model.Articles
            .findById(id)
            .then(function (data) {
                View.read(data)
            })
            .catch(function () {
                View.dataNotFound()
            })
    }

    static read_all() {
        Model.Articles
            .findAll()
            .then(function (data) {
                View.read(data)
            })
            .catch(function(){
                View.dataNotFound()
            })
    }

    static update(columnName, newValue, id) {
        Model.Articles
        .update({
            [columnName]: newValue
        },{
            where: {
                id: id
            }
        }) 
        .then(function(){
            View.update()
        })
        .catch(function(){
            View.errUpdate()
        })
    }

    static delete(id){
        Model.Articles
        .destroy({where: {id:id}})
        .then(function(){
            View.delete()
        })
        .catch(function(){
            View.errDelete()
        })
    }   

}

module.exports = Controller