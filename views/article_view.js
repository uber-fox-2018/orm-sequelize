const View = require('./view');

class ArticleView extends View {
  constructor() { }

  static displayHelp() {
    console.log(`$node index.js article add <title> <body> <author_id> <tag_id>`);
    console.log(`$node index.js article read_one <article_id>`);
    console.log(`$node index.js article read_all`);
    console.log(`$node index.js article update <id> <title> <body> <author_id> <tag_id>`);
    console.log(`$node index.js article delete <article_id>`);
  }

  static displayOne(article) {
    console.log(article.get({plain: true}));
  }

  static displayAll(articles) {
    articles.forEach(author => {
      this.displayOne(author);
    })
  }

  static displayAddSuccess(newArticle) {
    console.log(`Successfully added new article.`)
    this.displayOne(newArticle);
  }

  static displayUpdateSuccess(id) {
    console.log(`Successfully updated article with id: ${id}`);
  }

  static displayDeleteSuccess(id) {
    console.log(`Successfully deleted article with id: ${id}`);
  }

  static displayDataNotFound() {
    console.log(`Data not found.`)
  }
}

module.exports = ArticleView;