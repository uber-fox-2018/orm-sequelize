const Model = require('../models');
const View = require('../view/view.js');

class ControlArticle {
  static read_one(findId){
    Model.Article.findAll({
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

  static add(title,body,ArticleId,TagId){
    Model.Article
    .create({title,body,ArticleId,TagId})
    .then(data =>{
      View.add(data.dataValues)
    })
    .catch(err => {
      View.add(err)
    })

  }

  static read_all(){
    Model.Article
    .findAll()
    .then(data =>{
      View.showAll(data)
    })
    .catch(err =>{
      View.showAll(err)
    })
  }

  static update(id,title,body,ArticleId,TagId){
    Model.Article
    .update({title,body,ArticleId,TagId},
            {where:{id:id}})
    .then(data =>{
      data[0] ? View.update(): View.updateFailed()
    })
    .catch(err =>{
      View.update(err)
    })
  }

  static delete(id){
    Model.Article
    .destroy({where: {id}})
    .then(data =>{
      View.show(data)
    })
    .catch(err => {
      View.show(err)
    })
  }
}

module.exports = ControlArticle
