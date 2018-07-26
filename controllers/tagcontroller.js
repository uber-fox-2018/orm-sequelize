const Model = require('../models');
const Tag = Model.Tag;
const View = require('../views/view.js');

class TagController {

    static addTag(name) {
        Tag.create({name})
        .then(name => {
            View.displayMessage(name.get ({raw:true}))
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static readOneTag(id) {
        Tag.findById(id, {raw:true})
        .then(tagId => {
            View.tableReadOne(tagId)
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static readAllTags() {
        Tag.findAll({raw:true})
        .then(tags => {
            View.tableReadAll(tags)
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static updateTag(name, id) {
        Tag.update({name: name}, 
                    {where: {id: id}})
        .then(updatedTag => {
            View.displayMessage(updatedTag)
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static deleteTag(id) {
        Tag.destroy({where: {id: id}})
        .then(tagDeleted => {
            View.displayMessage(`Tag has been deleted.`)
        })
        .catch(err => {
            View.displayError(err)
        })
    }

}

module.exports = TagController;