const Model = require('../models');
const Author = Model.Author;
const View = require('../views/view.js');

class AuthorController {

    static helpMenu() {
        View.helpMenu()
    }

    static addAuthor(first_name, last_name, religion, gender, age) {
        Author.create({
            first_name: first_name,
            last_name: last_name,
            religion: religion,
            gender: gender,
            age: age
        })
            .then(author => {
                View.displayMessage(author.get({ raw: true }));
            })
            .catch(err => {
                View.displayError(err);
            })
    }

    static readOneAuthor(id) {
        Author.findById(id)
        .then(authorId => {
            View.tableReadOne(authorId.get({ raw: true }));
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static readAllAuthors() {
        Author.findAll({raw:true})
        .then(authors => {
            View.tableReadAll(authors);
        })
        .catch(err => {
            View.displayError(err);
        })
    }

    static updateAuthor(first_name, last_name, religion, gender, age, id) {
        Author.update({first_name: first_name,
                       last_name: last_name,
                       religion: religion,
                       gender: gender,
                       age: age},
                       {where: {id: id}})
        .then(authorUpdated => {
            View.displayMessage(authorUpdated);
        })
        .catch(err => {
            View.displayError(err);
        })
    }

    static deleteAuthor(id) {
        Author.destroy({where: {id: id}})
        .then(authorDeleted => {
            View.displayMessage(`Author data has been deleted.`);
        })
        .catch(err => {
            View.displayError(err);
        })
    }

}

module.exports = AuthorController;