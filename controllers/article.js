const View = require('../views')
const Model = require('../models')
const Article = Model.Article

class ControllerArticle {
    
    static add (title, body, AuthorId, TagId) {
        Article.create({
                title: title,
                body: body,
                AuthorId: AuthorId,
                TagId : TagId
        })
        .then((result) => {
            View.showTable([{
                id: result.id,
                title: title,
                body: body,
                AuthorId: AuthorId,
                TagId : TagId
            }])
            
        }).catch((err) => {
            console.log(err);
            
        });
    }

    static read_one(id) {
        Article.findById(id)
        .then((result) => {
            View.showTable([{
                id: result.id,
                title: result.title,
                body: result.body,
                AuthorId: result.AuthorId,
                TagId : result.TagId
            }]);
            
        }).catch((err) => {
            console.log(err);
            
        });
    }

    static read_all() {
        Article.findAll({raw: true})
        .then((result) => {
            View.showResult(result);
            
        }).catch((err) => {
            console.log(err);
            
        });
    }

    static update(idUpdate, titleUpdate) {
        Article.update({title: titleUpdate}, {where: {id: idUpdate}})
        .then((result) => {
            View.showResult(result);
            
        }).catch((err) => {
            console.log(err);
            
        });
    }

    static delete(idDelete) {
        Article.destroy({where: {id: idDelete}})
        .then((result) => {
            View.showResult(result);
            
        }).catch((err) => {
            console.log(err);
            
        });
    }
}

module.exports = ControllerArticle