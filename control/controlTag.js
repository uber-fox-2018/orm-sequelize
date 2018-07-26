const Model = require('../models');
const View = require('../view/view.js');

class ControlTag {
  static read_one(findId){
    Model.Tag.findAll({
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

  static add(name){
    Model.Tag
    .create({name})
    .then(data =>{
      View.add(data.dataValues)
    })
    .catch(err => {
      View.add(err)
    })

  }

  static read_all(){
    Model.Tag
    .findAll()
    .then(data =>{
      View.showAll(data)
    })
    .catch(err =>{
      View.showAll(err)
    })
  }

  static update(id,name){
    Model.Tag
    .update({name},
            {where:{id:id}})
    .then(data =>{
      data[0] ? View.update(): View.updateFailed()
    })
    .catch(err =>{
      View.update(err)
    })
  }

  static delete(id){
    Model.Tag
    .destroy({where: {id}})
    .then(data =>{
      View.show(data)
    })
    .catch(err => {
      View.show(err)
    })
  }
}

module.exports = ControlTag
