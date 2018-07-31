const Model = require('../models')
const View = require('../view')


class ControllerAuthor {

    static addAuthor(firstName, lastName, religion, gender, age) {
        Model.Author.create({
                firstName: firstName,
                lastName: lastName,
                religion: religion,
                gender: gender,
                age: age
            })
            .then(author => {
                View.displaySuccess(author.get())
            })
            .catch((err) => {
                View.displayError(err.errors[0].message)
            })
    }

    static readOneAuthor(id) {
        Model.Author.findById(id)
            .then(authorId => {
                View.displaySuccess(authorId.get())
            })
            .catch(() => {
                View.displayError('\nId Not Found...')
            })
    }

    static readAllAuthor() {
        Model.Author.findAll({
                raw: true
            })
            .then(authors => {
                View.displaySuccess(authors)
            })
            .catch(() => {
                View.displayError('\nFailed to Read Data...')
            })
    }

    static updateAuthor(id, firstName, lastName, religion, gender, age) {
        Model.Author.update({
                firstName: firstName,
                lastName: lastName,
                religion: religion,
                gender: gender,
                age: age
            }, {
                where: {
                    id: id
                }
            })
            .then(dataUpdated => {
                View.displaySuccess(dataUpdated)
            })
            .catch(() => {
                View.displayError('\nFailed to Update Data...')
            })
    }

    static eraseAuthor(id) {
        Model.Author.destroy({
            where: {
                id: id
            }
        })
        .then(eraseAuthor => {
            View.displaySuccess(eraseAuthor)
        })
        .catch(()=>{
            View.displayError('\nFailed to Erase Data')
        })
    }
}


module.exports = ControllerAuthor