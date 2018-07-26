const Model = require('../models');
const Article = Model.Article;
const View = require('../views/view.js');

class ArticleController {

    static addArticle(title, body, authorId, tagId) {
        Article.create({
            title: title,
            body: body,
            authorId: authorId,
            tagId: tagId
        })
            .then(article => {
                View.displayMessage(article.get({ raw: true }));
            })
            .catch(err => {
                View.displayError(err);
            })
    }

    static readOneArticle(id) {
        Article.findById(id, {raw:true})
        .then(articleId => {
            View.tableReadOne(articleId);
        })
        .catch(err => {
            View.displayError(err);
        })
    }

    static readAllArticles() {
        Article.findAll({raw:true})
        .then(articles => {
            View.tableReadAll(articles);
        })
        .catch(err => {
            View.displayError(err);
        })
    }

    static updateArticle(title, body, authorId, tagId, id) {
        Article.update({title: title,
                        body: body,
                        authorId: authorId,
                        tagId: tagId},
                        {where: {id: id}})
        .then(updatedArticle => {
            View.displayMessage(updatedArticle)
        })
        .catch(err => {
            View.displayError(err)
        })
    }

    static deleteArticle(id) {
        Article.destroy({where: {id: id}})
        .then(articleDeleted => {
            View.displayMessage(`Article has been deleted.`)
        })
        .catch(err => {
            View.displayError(err)
        })
    }


}

module.exports = ArticleController;