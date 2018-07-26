const Model = require('../models/index')
const View = require('../view/view')
class Controller{
    static add(data){
        Model.Tag.create(data)
        .then(data =>{
            View.show('data inserted')
            View.table(data.dataValues)
        })

        .catch(err =>{
            View.show(err.message)
        })
    }

    static findById(id){
        Model.Tag.findById(id)
        .then(data=>{
            if(data === null){
                View.show(`data not found`)
            }else{
                View.table(data.dataValues)
            }
            
        })

        .catch(err =>{
            View.show(err.message)
        })
    }

    static findAll(){
        Model.Tag.findAll()
        .then(data =>{
            var arr = []
            for(var i = 0; i < data.length;i++){
                arr.push(data[i].dataValues)
            }
            View.table(arr)
        })

        .catch(err=>{
            View.show(err.message)
        })
    }

    static update(identifier, dataUpdate){
        Model.Tag.update(dataUpdate,{where : identifier})
        .then(data =>{
            if(data[0] === 0){
                View.show(`data not found`)
            }else{
                View.show(`update succes`)
            }
        })

        .catch(err =>{
            View.show(err.message)
        })
    }

    static delete(identifier){
        Model.Tag.destroy({where : identifier})
        .then(data =>{
            if(data === 0){
                View.show(`data not found`)
            }else{
                View.show(`data deleted`)
            }
        })

        .catch(err =>{
            View.show(err)
        })
    }
}

module.exports = Controller