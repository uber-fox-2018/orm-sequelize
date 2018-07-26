const View = require('./view');

class AuthorView extends View {
  constructor() { }

  static displayHelp() {
    console.log(`$node index.js author add <firstName> <lastName> <religion> <gender> <age>`);
    console.log(`$node index.js author read_one <authorId>`);
    console.log(`$node index.js author read_all`);
    console.log(`$node index.js author update <author_id> <firstName> <lastName> <religion> <gender> <age>`);
    console.log(`$node index.js author delete <author_id>`);
  }

  static displayOne(author) {
    console.log(author.get({plain: true}));
  }

  static displayAll(authors) {
    authors.forEach(author => {
      this.displayOne(author);
    })
  }

  static displayAddSuccess(newAuthor) {
    console.log(`Successfully added new author.`)
    this.displayOne(newAuthor);
  }

  static displayUpdateSuccess(id) {
    console.log(`Successfully updated author with id: ${id}`);
  }

  static displayDeleteSuccess(id) {
    console.log(`Successfully deleted author with id: ${id}`);
  }

  static displayDataNotFound() {
    console.log(`Data not found.`)
  }

}

module.exports = AuthorView;