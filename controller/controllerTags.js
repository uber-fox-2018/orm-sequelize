const ModelTag = require('../models/')
const View = require('../view/view')

class ControllerTag {
    static add(newData) {
        ModelTag.Tags.create(newData)
        .then(data => {
            View.displayMessage(`data "${data.name}" has been inserted to database`)
        })
        .catch(err => {
            View.displayErrorMessage(err.message)
        })
    }

    static readOne(id) {
        ModelTag.Tags.findOne({
            where: {
                id: id
            }
        })
        .then(data => {
            if(data) {
                View.displayMessage(data.dataValues)
            } else {
                View.displayErrorMessage(`Data Not Found`)
            }
        })
        .catch(err => {
            View.displayErrorMessage(err.message)  
        })
    }

    static readAll() {
        ModelTag.Tags.findAll()
        .then(datas => {
            datas.forEach(data => {
                View.displayMessage(data.dataValues)
            })
        })
        .catch(err => {
            View.displayErrorMessage(err.message)
        })
    }

    static update(updateData, id) {
        ModelTag.Tags.update(updateData, {
            where: {
                id: id
            }
        })
        .then(data => {
            if(data[0] === 0) {
                View.displayErrorMessage(`data not found`)
            } else {
                View.displayMessage(`data has been update`)
            }
        })
        .catch(err => {
            View.displayErrorMessage(err.message)
        })
    }

    static remove(id) {
        ModelTag.Tags.destroy({
            where: {
                id: id
            }
        })
        .then(data => {
            if(data === 0) {
                View.displayErrorMessage(`data not found`)
            } else {
                View.displayMessage(`data has been deleted`)
            }
        })
        .catch(err => {
            View.displayErrorMessage(err.message)
        })
    }
}

module.exports = ControllerTag