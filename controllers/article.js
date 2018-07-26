const Model = require("../models");
const View = require("../view.js");

class Article{
    static add(title, body, AuthorId, TagId){
        Model.Article.create({
            title : title,
            body : body,
            AuthorId : AuthorId,
            TagId : TagId
        })
        .then(data =>{
            View.display(data.dataValues);
        })
        .catch(err =>{
            View.error(err);
        })
    }

    static read_one(id){
        Model.Article.findById(id)
         .then(data => {
             View.display(data.dataValues);
         }) 
         .catch(err => {
             View.error(err);
         })
    }

    static read_all(){
       Model.Article.findAll({raw:true})
       .then(data=>{
        View.display(data);
       })
       .catch(err => {
        View.error(err);
        })
    }

    static update(columnName, newValue, id){
        Model.Article.update(
            {[columnName]:newValue},
            {returning: true, where:{id:id}}
        )
        .then(function(rowsUpdated){
            View.display(rowsUpdated[1][0].dataValues);
        })
        .catch(err => {
            View.error(err);
        })
    }

    static delete(id){
        Model.Article.destroy({where: {id:id}})
        .then(function(data){
            View.displaySuccess(id,data);
        })
        .catch(err=>{
            View.error(err);
        })
    }
}


module.exports = Article;
