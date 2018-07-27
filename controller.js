let Model = require('./models')
let ModelAuthor = Model.Author
let View = require('./view.js')


class Controller {
    static c_addAuthor(first_name,last_name,religion,gender,age){
        ModelAuthor.create({
            first_name:first_name,
            last_name:last_name,
            religion:religion,
            gender:gender,
            age:age
        })
        .then(data => {
            View.showData(data.dataValues)
        })

        .catch(error =>{
            View.showError(error)
        })

    }

    static c_one(id){
        ModelAuthor.findById(id)
            .then(id => {
                View.showData(id.dataValues)
            })
            .catch(err => {
                View.showError(err)
            })

        
    }

    static c_all(){
        ModelAuthor.findAll()
        .then(ModelAuthor => {

            
            View.showData(ModelAuthor)
            
        })
        .catch(err => {
            View.showError(err)
        })


    }

    static c_update(id,value){
        ModelAuthor.update({
            first_name:value,
        }, {where : {id:id}})

        .then(data => {
            View.showData(data)
        })

        .catch(err => {
            View.showError(err)
        })
    }

    static c_destroy(id){
        ModelAuthor.destroy({where: {id:id}})
        .then(data => {
            console.log(`Author has been deleted from database`)
            View.showData(data)
  
        })

        .catch(err => {
            View.showError(err)
        })

    }

}
module.exports = Controller