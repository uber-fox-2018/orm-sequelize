const Model = require("../models");
const View = require("../view.js");

class Author{
    static add(fName, lName, religion, gender, age){
        Model.Author.create({
            first_name : fName,
            last_name : lName,
            religion : religion,
            gender : gender,
            age : age
        })
        .then(data =>{
            View.display(data.dataValues);
        })
        .catch(err =>{
            View.error(err);
        })
    }

    static read_one(id){
        Model.Author.findById(id)
         .then(data => {
             View.display(data.dataValues);
         }) 
         .catch(err => {
             View.error(err);
         })
    }

    static read_all(){
       Model.Author.findAll({raw:true})
       .then(data=>{
        View.display(data);
       })
       .catch(err => {
        View.error(err);
        })
    }

    static update(columnName, newValue, id){
        Model.Author.update(
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
        Model.Author.destroy({where: {id:id}})
        .then(function(data){
            View.displaySuccess(id,data);
        })
        .catch(err=>{
            View.error(err);
        })
    }

    static help(){
        View.help();
    }
}


module.exports = Author;