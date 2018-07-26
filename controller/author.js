const Model = require('../models/index')
const View = require('../view/author')

class Controller {

    static add(firstName, lastName, religion, gender, age) {
        Model.Authors
            .create(
                {
                    first_name: firstName,
                    last_name: lastName,
                    religion: religion,
                    gender: gender,
                    age: age
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
        Model.Authors
            .findById(id)
            .then(function (data) {
                View.read(data)
            })
            .catch(function () {
                View.dataNotFound()
            })
    }

    static read_all() {
        Model.Authors
            .findAll()
            .then(function (data) {
                View.read(data)
            })
            .catch(function(){
                View.dataNotFound()
            })
    }

    static update(columnName, newValue, id) {
        Model.Authors
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
        Model.Authors
        .destroy({where: {id:id}})
        .then(function(){
            View.delete()
        })
        .catch(function(){
            View.errDelete()
        })
    }   

}

// Controller.add('baba','yaga','hindu','male',34)
// Controller.read_one(1)

module.exports = Controller