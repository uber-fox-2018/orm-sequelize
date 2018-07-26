"use strict"
const AuthorController = require('./controllers/authorcontroller.js');
const ArticleController = require('./controllers/articlecontroller.js');
const TagController = require('./controllers/tagcontroller.js');

const argv = process.argv;
var table = argv[2];
var command = argv[3];


if (table == 'authors') {
    if (command == 'add') {
        let first_name = argv[4];
        let last_name = argv[5];
        let religion = argv[6];
        let gender = argv[7];
        let age = argv[8];
        AuthorController.addAuthor(first_name, last_name, religion, gender, age);

    } else if (command == 'read_one') {
        let id = argv[4];
        AuthorController.readOneAuthor(id);

    } else if (command == 'read_all') {
        AuthorController.readAllAuthors();

    } else if (command == 'update') {
        let first_name = argv[4];
        let last_name = argv[5];
        let religion = argv[6];
        let gender = argv[7];
        let age = argv[8];
        let id = argv[9];
        AuthorController.updateAuthor(first_name, last_name, religion, gender, age, id);

    } else if (command = 'delete') {
        let id = argv[4];
        AuthorController.deleteAuthor(id);
    }


} else if (table == 'articles') {
    if (command == 'add') {
        let title = argv[4];
        let body = argv[5];
        let authorId = argv[6];
        let tagId = argv[7];
        ArticleController.addArticle(title, body, authorId, tagId);

    } else if (command == 'read_one') {
        let id = argv[4];
        ArticleController.readOneArticle(id);

    } else if (command == 'read_all') {
        ArticleController.readAllArticles();

    } else if (command == 'update') {
        let title = argv[4];
        let body = argv[5];
        let authorId = argv[6];
        let tagId = argv[7];
        let id = argv[8];
        ArticleController.updateArticle(title, body, authorId, tagId, id);

    } else if (command == 'delete') {
        let id = argv[4]; 
        ArticleController.deleteArticle(id);
    }


} else if (table == 'tags') {
    if (command == 'add') {
        let name = argv[4];
        TagController.addTag(name);

    } else if (command == 'read_one') {
        let id = argv[4];
        TagController.readOneTag(id);

    } else if (command == 'read_all') {
        TagController.readAllTags();

    } else if (command == 'update') {
        let name = argv[4];
        let id = argv[5];
        TagController.updateTag(name, id);

    } else if (command == 'delete') {
        let id = argv[4];
        TagController.deleteTag(id);
    }

} else if (table == 'help') {
    AuthorController.helpMenu();
}