const ArticleController = require('./controller/articleController');
const AuthorController = require('./controller/authorController');
const TagController = require('./controller/tagController');
const MainController = require('./controller/mainController');
const fs = require('fs');

const mainController = new MainController();
const articleController = new ArticleController();
const authorController = new AuthorController();
const tagController = new TagController();

const argv = process.argv.slice(2);
let type = argv[0];
const help = fs.readFileSync('./help.csv', 'utf8').split('\n');

switch(type) {
  case 'author': {
    let command = argv[1];
    switch(command) {
      case 'add': {
        let first_name = argv[2];
        let last_name = argv[3];
        let religion = argv[4];
        let gender = argv[5];
        let age = argv[6];
        authorController.add(first_name, last_name, religion, gender, age);
        break;
      }

      case 'read_one': {
        let id = argv[2];
        authorController.readOne(id);
        break;
      }
      
      case 'read_all': {
        authorController.readAll();
        break;
      }

      case 'update': {
        let id = argv[2];
        let first_name = argv[3];
        let last_name = argv[4];
        let religion = argv[5];
        let gender = argv[6];
        let age = argv[7];
        authorController.update(id, first_name, last_name, religion, gender, age);
        break;
      }

      case 'erase': {
        let id = argv[2];
        authorController.erase(id);
        break;
      };
    }
    break;
  }

  case 'tag': {
    let command = argv[1];
    switch(command) {
      case 'add': {
        let name = argv[2];
        tagController.add(name);
        break;
      }

      case 'read_one': {
        let id = argv[2];
        tagController.readOne(id);
        break;
      }
      
      case 'read_all': {
        tagController.readAll();
        break;
      }

      case 'update': {
        let id = argv[2];
        let name = argv[2];
        tagController.update(id, name);
        break;
      }

      case 'erase': {
        let id = argv[2];
        tagController.erase(id);
        break;
      }
    }
    break;
  }

  case 'article': {
    let command = argv[1];
    switch(command) {
      case 'add': {
        let title = argv[2];
        let body = argv[3];
        let authorId = argv[4];
        let tagId = argv[5];
        articleController.add(title, body, authorId, tagId);
        break;
      }

      case 'read_one': {
        let id = argv[2];
        articleController.readOne(id);
        break;
      }
      
      case 'read_all': {
        articleController.readOne();
        break;
      }

      case 'update': {
        let id = argv[2];
        let title = argv[2];
        let body = argv[3];
        let authorId = argv[4];
        let tagId = argv[5];
        articleController.add(id, title, body, authorId, tagId);
        break;
      }

      case 'erase': {
        let id = argv[2];
        articleController.erase(id);
        break;
      }
    }
    break;
  }

  default: {
    mainController.help(help); 
    break;
  }

}