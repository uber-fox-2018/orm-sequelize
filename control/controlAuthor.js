const Model = require('../models');
const View = require('../view/view.js');

class ControlAuthor {
  static read_one(findId){
    Model.Author.findAll({
        where : {
          id: findId
        }
})
.then(data=>{
  View.read_one(data[0].dataValues)
})
.catch(err =>{
  View.read_one(err)
})
  }

  static add(first_name,last_name,religion,gender,age){
    Model.Author
    .create({first_name,last_name,religion,gender,age})
    .then(data =>{
      View.add(data.dataValues)
    })
    .catch(err => {
      View.add(err)
    })

  }

  static read_all(){
    Model.Author
    .findAll()
    .then(data =>{
      View.showAll(data)
    })
    .catch(err =>{
      View.showAll(err)
    })
  }

  static update(id,first_name,last_name,religion,gender,age){
    Model.Author
    .update({first_name,last_name,religion,gender,age},
            {where:{id:id}})
    .then(data =>{
      data[0] ? View.update(): View.updateFailed()
    })
    .catch(err =>{
      View.update(err)
    })
  }

  static delete(id){
    Model.Author
    .destroy({where: {id}})
    .then(data =>{
      View.show(data)
    })
    .catch(err => {
      View.show(err)
    })
  }
}

module.exports = ControlAuthor
