const ModelArticle = require('../models/')
const View = require('../view/view')

class ControllerArticle {
    static add(newData) {
        ModelArticle.Article.create(newData)
        .then(data => {
            //data return object
            View.displayMessage(`data "${data.title}" has been created with ID: ${data.id}`)
        })
        .catch(err => {
            View.displayErrorMessage(err.message)
        })
    }

    static readOne(id) {
        ModelArticle.Article.findOne({
            where: {
                id: id
            }
        })
        .then(data => {
            //data return object
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
        ModelArticle.Article.findAll()
        .then(datas => {
            //datas return arrayOfObject
            datas.forEach(data => {
                View.displayMessage(data.dataValues)
            })
        })
        .catch(err => {
            View.displayErrorMessage(err.message)
        })
    }

    static update(newData, id) {
        ModelArticle.Article.update(newData, {
            where: {
                id: id
            }
        })
        .then(data => {
            //this data just return total data updated
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
        ModelArticle.Article.destroy({
            where: {
                id:id
            }
        })
        .then(data => {
            // data return number has been deleted
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


module.exports = ControllerArticle