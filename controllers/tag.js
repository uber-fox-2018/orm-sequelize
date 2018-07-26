const Model = require("../models");
const View = require("../view.js");

class Tag{
    static add(name){
        Model.Tag.create({
            name : name
        })
        .then(data =>{
            View.display(data.dataValues);
        })
        .catch(err =>{
            View.error(err);
        })
    }

    static read_one(id){
        Model.Tag.findById(id)
         .then(data => {
             View.display(data.dataValues);
         }) 
         .catch(err => {
             View.error(err);
         })
    }

    static read_all(){
       Model.Tag.findAll({raw:true})
       .then(data=>{
        View.display(data);
       })
       .catch(err => {
        View.error(err);
        })
    }

    static update(columnName, newValue, id){
        Model.Tag.update(
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
        Model.Tag.destroy({where: {id:id}})
        .then(function(data){
            View.displaySuccess(id,data);
        })
        .catch(err=>{
            View.error(err);
        })
    }

}

module.exports = Tag;