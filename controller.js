const Model = require('./models')
const View = require('./view')


class Controller{

    static addAuthor(first_name, last_name, religion, gender){
        Model.Author.create({ first_name: first_name, last_name: last_name, religion: religion, gender: gender })
        .then(data => {
            let value = data.get({plain: true})
            View.createMessageAllert(value)
        })
        .catch(err => {
            View.createMessageAllert(err)
        })
    }

    static addTag(name){
        Model.Tag.create({ name: name })
        .then(data => {
            let value = data.get({plain: true})
            View.createMessageAllert(value)
        })
        .catch(err => {
            View.createMessageAllert(err)
        })
    }

    static addArticle(title, body, authorId, tagId){
        Model.Article.create({ title: title, body: body, AuthorId: authorId, TagId: tagId })
        .then(data => {
            let value = data.get({plain: true})
            View.createMessageAllert(value)
        })
        .catch(err => {
            View.createMessageAllert(err)
        })
    }

    static showById(command1, id){
        if(command1 == 'author'){
            Model.Author.findById(id)
            .then(data => {
                let value = data.get({plain: true})
                View.showById(value) 
            })
            .catch(err => {
                View.showById(err)
            })
        }
        else if(command1 == 'tag'){
            Model.Tag.findById(id)
            .then(data => {
                let value = data.get({plain: true})
                View.showById(value) 
            })
            .catch(err => {
                View.showById(err)
            })
        }
        else if(command1 == 'article'){
            Model.Article.findById(id)
            .then(data => {
                let value = data.get({plain: true})
                View.showById(value) 
            })
            .catch(err => {
                View.showById(err)
            })
        }
    }

    static showAll(command1){
        
        if(command1 == 'author'){
            Model.Author.findAll({raw:true})
            .then(data => {
                View.showAll(data)
            })
            .catch(err => {
                View.showAll(err)
            })
        }
        else if(command1 == 'tag'){
            Model.Tag.findAll({raw:true})
                .then(data => {
                View.showAll(data)
            })
            .catch(err => {
                View.showAll(err)
            })
        }
        else if(command1 == 'article'){
            Model.Article.findAll({raw:true})
                .then(data => {
                View.showAll(data)
            })
            .catch(err => {
                View.showAll(err)
            })
        }
    }

    static update(command1, column, id, update){
        if(command1 == 'author'){
            if(column == 'first_name'){
                Model.Author.update({first_name: update},{ where: { id: id } },{raw: true})
                .then(data =>{
                     View.update(data)
                })
                .error(err => {
                    View.update(err)
                })
            }
            else if(column == 'last_name'){
                Model.Author.update({last_name: update},{ where: { id: id } },{raw: true})
                .then(data =>{
                    View.update(data)
                })
                .error(err => {
                    View.update(err)
                })
            }
            else if(column == 'religion'){
                Model.Author.update({religion: update},{ where: { id: id } },{raw: true})
                .then(data =>{
                    View.update(data)
                })
                .error(err => {
                    View.update(err)
                })
            }
            else if(column == 'gender'){
                Model.Author.update({gender: update},{ where: { id: id } },{raw: true})
                .then(data =>{
                    View.update(data)
                })
                .error(err => {
                    View.update(err)
                })
            }
        }
        else if(command1 == 'tag'){
            if(column == 'name'){
                Model.Tag.update({name: update},{ where: { id: id } },{raw: true})
                .then(data =>{
                    View.update(data)
                })
                .error(err => {
                    View.update(err)
                })  
            }
        }
        else if(command1 == 'article'){
            if(column == 'title'){
                Model.Article.update({title: update},{ where: { id: id } },{raw: true})
                .then(data =>{
                     View.update(data)
                })
                .error(err => {
                    View.update(err)
                })
            }
            else if(column == 'body'){
                Model.Article.update({body: update},{ where: { id: id } },{raw: true})
                .then(data =>{
                    View.update(data)
                })
                .error(err => {
                    View.update(err)
                })
            }
            else if(column == 'AuthorId'){
                Model.Article.update({AuthorId: update},{ where: { id: id } },{raw: true})
                .then(data =>{
                    View.update(data)
                })
                .error(err => {
                    View.update(err)
                })
            }
            else if(column == 'TagId'){
                Model.Article.update({TagId: update},{ where: { id: id } },{raw: true})
                .then(data =>{
                    View.update(data)
                })
                .error(err => {
                    View.update(err)
                })
            }
        }   
    }

    static delete(command1, id){
        if(command1 == 'author'){
            Model.Author.destroy({where: {id: id}})
            .then(status => {
                View.delete(status)
             })
            .catch(err => {
                View.delete(err)
            })
        }
        else if(command1 == 'tag'){
            Model.Tag.destroy({where: {id: id}})
            .then(status => {
                View.delete(status)
             })
            .catch(err => {
                View.delete(err)
            })
        }
        else if(command1 == 'article'){
            Model.Article.destroy({where: {id: id}})
            .then(status => {
                View.delete(status)
             })
            .catch(err => {
                View.delete(err)
            })
        }
    }
}

module.exports = Controller