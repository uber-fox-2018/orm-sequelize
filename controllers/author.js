const View = require('../views')
const Model = require('../models')
const Author = Model.Author

class ControllerAuthor {
    
    static add (firstName, lastName, religion, gender, age) {
        Author.create({
            firstName: firstName,
            lastName: lastName,
            religion: religion,
            gender: gender,
            age: age
        })
        .then((result) => {
            View.showTable([{
                id: result.id,
                firstName: result.firstName,
                lastName: result.lastName,
                religion: result.religion,
                gender: result.gender,
                age: result.age
            }])
            
        }).catch((err) => {
            console.log(err);
            
        });
    }

    static read_one(id) {
        Author.findById(id)
        .then((result) => {
            View.showTable([{
                id: result.id,
                firstName: result.firstName,
                lastName: result.lastName,
                religion: result.religion,
                gender: result.gender,
                age: result.age
            }]);
            
        }).catch((err) => {
            console.log(err);
            
        });
    }

    static read_all() {
        Author.findAll({raw: true})
        .then((result) => {
            View.showResult(result);
            
        }).catch((err) => {
            console.log(err);
            
        });
    }

    static update(idUpdate, firstNameUpdate) {
        Author.update({firstName: firstNameUpdate}, {where: {id: idUpdate}})
        .then((result) => {
            View.showResult(result);
            
        }).catch((err) => {
            console.log(err);
            
        });
    }

    static delete(idDelete) {
        Author.destroy({where: {id: idDelete}})
        .then((result) => {
            View.showResult(result);
            
        }).catch((err) => {
            console.log(err);
            
        });
    }
}

module.exports = ControllerAuthor