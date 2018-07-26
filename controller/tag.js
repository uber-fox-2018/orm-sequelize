const Model = require('../models/index')
const View = require('../view/tag')

class Controller{

    static add(name) {
        Model.Tags
            .create(
                {
                    name: name
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
        Model.Tags
            .findById(id)
            .then(function (data) {
                View.read(data)
            })
            .catch(function () {
                View.dataNotFound()
            })
    }

    static read_all() {
        Model.Tags
            .findAll()
            .then(function (data) {
                View.read(data)
            })
            .catch(function(){
                View.dataNotFound()
            })
    }

    static update(columnName, newValue, id) {
        Model.Tags
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
        Model.Tags
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