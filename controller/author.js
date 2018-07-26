const Model = require('../models/index.js')
const View = require('../view/view.js')
class Controller{
    static add(first_name,last_name,religion,gender,age){
        Model.Author.create({
            first_name : first_name,
            last_name : last_name,
            religion : religion,
            gender : gender,
            age : age
        },{id : id})

        .then(() =>{
            View.show(`data inserted succesfully`) 
        })

        .catch(() =>{
            console.log('insert data failed');
            
        })
    }

    static readById(id){
        Model.Author.findById(id)
        .then((data)=>{
            View.table(data.dataValues)
        })

        .catch(()=>{
            View.show(`data not found`)
        })
    }

    static readAll(){
        Model.Author.findAll()
        .then(data =>{
            var arr = []
            for(var i = 0; i < data.length;i++){
                arr.push(data[i].dataValues)
            }
            View.table(arr)
        })

        .catch(()=>{
            View.show(`data not found`)
        })
    }

    static update(id,first_name,last_name,religion,gender,age){
        Model.Author.update({
            first_name : first_name,
            last_name : last_name,
            religion : religion,
            gender : gender,
            age : age
        },{where : {id : id}})

        .then(data =>{
            if(data[0] === 0){
                View.show(`data not found`)
            }else{
                View.show(`update succes`)
            }
        })

        .catch(err =>{
            View.show(err)
        })
    }

    static delete(id){
        Model.Author.destroy({where : {id : id}})
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