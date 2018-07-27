const View = require('../views')
const Model = require('../models')
const Tag = Model.Tag

class ControllerTag {
    
    static add (name) {
        Tag.create({
            name: name,
        })
        .then((result) => {
            View.showTable([{
                id: result.id,
                name: result.name
            }])
            
        }).catch((err) => {
            console.log(err);
            
        });
    }

    static read_one(id) {
        Tag.findById(id)
        .then((result) => {
            View.showTable([{
                id: result.id,
                name: result.name,
            }]);
            
        }).catch((err) => {
            console.log(err);
            
        });
    }

    static read_all() {
        Tag.findAll({raw: true})
        .then((result) => {
            View.showResult(result);
            
        }).catch((err) => {
            console.log(err);
            
        });
    }

    static update(idUpdate, nameUpdate) {
        Tag.update({name: nameUpdate}, {where: {id: idUpdate}})
        .then((result) => {
            View.showResult(result);
            
        }).catch((err) => {
            console.log(err);
            
        });
    }

    static delete(idDelete) {
        Tag.destroy({where: {id: idDelete}})
        .then((result) => {
            View.showResult(result);
            
        }).catch((err) => {
            console.log(err);
            
        });
    }
}

module.exports = ControllerTag