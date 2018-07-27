let Model = require('./models')
let ModelAuthor = Model.Author
let ModelTag = Model.Tag
let ModelArticle = Model.Article
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

    static c_add(name){
        ModelTag.create({
            name:name,
        })
        .then(data => {
            View.showData(data.dataValues)
        })

        .catch(error =>{
            View.showError(error)
        })

    }

    static c_one(id){
        ModelTag.findById(id)
            .then(id => {
                View.showData(id.dataValues)
            })
            .catch(err => {
                View.showError(err)
            })

        
    }

    static c_all(){
        ModelTag.findAll()
        .then(data => {
            
            View.showData(data)
            
        })
        .catch(err => {
            View.showError(err)
        })
    }

    static c_update(id,value){
        ModelTag.update({
            name:value,
        }, {where : {id:id}})

        .then(data => {
            View.showData(data)
        })

        .catch(err => {
            View.showError(err)
        })
    }

    static c_destroy(id){
        ModelTag.destroy({where: {id:id}})
        .then(data => {
            console.log(`Author has been deleted from database`)
            View.showData(data)
  
        })

        .catch(err => {
            View.showError(err)
        })

    }

    static c_add(title,body){
        ModelArticle.create({
            title:title,
            body:body,
        })
        .then(data => {
            View.showData(data.dataValues)
        })

        .catch(error =>{
            View.showError(error)
        })

    }

    static c_one(id){
        ModelArticle.findById(id)
            .then(id => {
                View.showData(id.dataValues)
            })
            .catch(err => {
                View.showError(err)
            })

        
    }

    static c_all(){
        ModelArticle.findAll()
        .then(data => {
            
            View.showData(data)
            
        })
        .catch(err => {
            View.showError(err)
        })
    }

    static c_update(id,value){
        ModelArticle.update({
            title:value,
        }, {where : {id:id}})

        .then(data => {
            View.showData(data)
        })

        .catch(err => {
            View.showError(err)
        })
    }

    static c_destroy(id){
        ModelTag.destroy({where: {id:id}})
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