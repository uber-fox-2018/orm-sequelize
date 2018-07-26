const ModelAuthor = require('../models/')
const View = require('../view/view')

class ControllerArticle {
    static menu() {
        View.displayMessage(
            `
            ====================== MENU ===================================
            author add       ---> author add <space> "input",
            author read_one  ---> author read_one <space> "input id author",
            author read_all  ---> author read_all,
            author update    ---> author update <space> "input data to update and input id",
            author delete    ---> author delete <space> "input author id",
            tag add          ---> tag add <space> "input",
            tag read_one     ---> tag read_one <space> "input id author",
            tag read_all     ---> tag read_all,
            tag update       ---> tag update <space> "input data to update and input id",
            tag delete       ---> tag delete <space> "input author id",
            article add      ---> article add <space> "input",
            article read_one ---> article read_one <space> "input id author",
            article read_all ---> article read_all,
            article update   ---> article update <space> "input data to update and input id",
            article delete   ---> article delete <space> "input author id"
            ====================== ORM ===================================
            `
        )
    }

    static add(fName, lName, religion, gender, age) {
        ModelAuthor.Author.create({
          firstName: fName,
          lastName: lName,
          religion: religion,
          gender: gender,
          age: age  
        })
        .then(data => {
            //data return object
            View.displayMessage(`data "${data.firstName} ${data.lastName}" has been created with ID: ${data.id}`)
        })
        .catch(err => {
            View.displayErrorMessage(err.message)
        })
    }

    static readOne(id) {
        ModelAuthor.Author.findOne({
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
        ModelAuthor.Author.findAll()
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
        ModelAuthor.Author.update(newData, {
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
        ModelAuthor.Author.destroy({
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