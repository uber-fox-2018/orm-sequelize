const ArticleController = require('./controllers/article_controller');
const AuthorController = require('./controllers/author_controller');
const TagController = require('./controllers/tag_controller');

let article = new ArticleController();
let author = new AuthorController();
let tag = new TagController();

let commands = process.argv.slice(2);

switch (commands[0]) {
  case 'author': {
    switch (commands[1]) {
      case 'read_all':
        author.readAll();
        break;
      case 'read_one':
        author.readOne(commands[2]);
        break;
      case 'add':
        author.add(commands[2], commands[3], commands[4], commands[5], commands[6]);
        break;
      case 'update':
        author.update(commands[2], commands[3], commands[4], commands[5], commands[6], commands[7]);
        break;
      case 'delete':
        author.delete(commands[2])
        break;
      default:
        author.help();
        break;
    }
  } break;
  case 'article': {
    switch (commands[1]) {
      case 'read_all':
        article.readAll();
        break;
      case 'read_one':
        article.readOne(commands[2]);
        break;
      case 'add':
        article.add(commands[2], commands[3], commands[4], commands[5]);
        break;
      case 'update':
        article.update(commands[2], commands[3], commands[4], commands[5], commands[6]);
        break;
      case 'delete':
        article.delete(commands[2]);
        break;
      default:
        article.help();
        break;
    }
  } break;
  case 'tag': {
    switch (commands[1]) {
      case 'read_all':
        tag.readAll();
        break;
      case 'read_one':
        tag.readOne(commands[2]);
        break;
      case 'add':
        tag.add(commands[2]);
        break;
      case 'update':
        tag.update(commands[2], commands[3]);
        break;
      case 'delete':
        tag.delete(commands[2])
        break;
      default:
        tag.help();
        break;
    }
  } break;
  default:
    author.help();
    tag.help();
    article.help();
    break;
}