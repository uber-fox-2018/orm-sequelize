let argv = process.argv.slice(2);
let command = argv[0];
let input = argv[1];
let ControllerAuthor = require("./controller/controllerAuthor");
let ControllerArticle = require("./controller/controllerArticle");
let ControllerTag = require("./controller/controllerTag");

switch (command) {
  case `author`:
    switch (input) {
      case `add`:
        let firstName = argv[2];
        let lastName = argv[3];
        let religion = argv[4];
        let gender = argv[5];
        let age = argv[6];
        console.log(firstName, lastName, religion, gender, age);

        ControllerAuthor.c_addAuthor(
          firstName,
          lastName,
          religion,
          gender,
          age
        );
        break;
    }
    switch (input) {
      case `read_one`:
        let id = argv[2];
        ControllerAuthor.c_readOneAuthor(id);
        break;
    }
    switch (input) {
      case `read_all`:
        let data = argv[2];
        ControllerAuthor.c_readAllAuthor(data);
        break;
    }
    switch (input) {
      case `update`:
        let column = argv[2];
        let value = argv[3];
        ControllerAuthor.c_updateAuthor(column, value);
        break;
    }
    switch (input) {
      case `delete`:
        let id = argv[2];
        ControllerAuthor.c_deleteAuthor(id);
        break;
    }
    break;
}

switch (command) {
  case `article`:
    switch (input) {
      case `add`:
        let title = argv[2];
        let body = argv[3];
        let authorId = argv[4];
        let tagId = argv[5];
        ControllerArticle.c_addArticle(title, body, authorId, tagId);
        break;
    }
    switch (input) {
      case `read_one`:
        let id = argv[2];
        ControllerArticle.c_findArticle(id);
        break;
    }

    switch (input) {
      case `read_all`:
        let data = argv[2];
        ControllerArticle.c_findAllArticle(data);
        break;
    }
    switch (input) {
      case `update`:
        let id = argv[2];
        let value = argv[3];
        ControllerArticle.c_updateArticle(id, value);
        break;
    }

    switch (input) {
      case `delete`:
        let id = argv[2];
        ControllerArticle.c_deleteArticle(id);
        break;
    }
    break;
}

switch (command) {
  case `tag`:
    switch (input) {
      case `add`:
        input = argv[2];

        ControllerTag.c_addTag(input);
        break;
    }
    switch (input) {
      case `read_one`:
        let id = argv[2];
        ControllerTag.c_readTag(id);
        break;
    }

    switch (input) {
      case `read_all`:
        let data = argv[2];
        ControllerTag.c_readAllTag(data);
        break;
    }
    switch (input) {
      case `update`:
        let id = argv[2];
        let value = argv[3];
        ControllerTag.c_updateTag(id, value);
        break;
    }

    switch (input) {
      case `delete`:
        let id = argv[2];
        ControllerTag.c_deleteTag(id);
        break;
    }
    break;
}
