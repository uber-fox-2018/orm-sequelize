const argv = process.argv
const command = argv.slice(2,4)
const input = argv.slice(4)
const Controller = require('./controller/controller')
const ControllerAuthors = Controller.ControllerAuthor
const ControllerArticle = Controller.ControllerArticle
const ControllerTag = Controller.ControllerTag

class Application {
  static chooseMenu(command, input) {
    switch (command[0]) {
      case 'author':
        switch(command[1]) {
          case 'add':
            let authorObj = {
              firstName: input[0],
              lastName: input[1],
              religion: input[2],
              gender: input[3],
              age: input[4]
            }
            ControllerAuthors.add(authorObj.firstName, authorObj.lastName, authorObj.religion, authorObj.gender, authorObj.age)
            break;
          case 'read_one':
            var id = input[0]
            ControllerAuthors.readOne(id)
            break;
          case 'read_all':
            ControllerAuthors.readAll()
            break;
          case 'update':
            var id = input[5]
            let updateObj = {
              firstName: input[0],
              lastName: input[1],
              religion: input[2],
              gender: input[3],
              age: input[4]
            }
            ControllerAuthors.update(updateObj, id)
            break;
          case 'delete':
            var id = input[0]
            ControllerAuthors.remove(id)
          default:
        }
        break;
      case 'help':
        ControllerAuthors.menu()
        break;
      case 'article':
          switch (command[1]) {
            case 'add':
              let articleObj = {
                title: input[0],
                body: input[1],
                AuthorId: input[2],
                TagId: input[3]
              }
              ControllerArticle.add(articleObj)
              break;
            case 'read_one':
              var id = input[0]
              ControllerArticle.readOne(id)
              break;
            case 'read_all':
              ControllerArticle.readAll()
              break;
            case 'update':
              var id = input[4]
              let updateArticleObj = {
                title: input[0],
                body: input[1],
                AuthorId: input[2],
                TagId: input[3]
              }
              ControllerArticle.update(updateArticleObj, id)
              break;
            case 'delete': 
              var id = input[0]
              ControllerArticle.remove(id)
              break;
            default:
          }
          break;
        case 'tag':
          switch (command[1]) {
            case 'add':
              let newTag = {
                name: input[0]
              }
              ControllerTag.add(newTag)
              break;
            case 'read_one':
              var id = input[0]
              ControllerTag.readOne(id)
              break;
            case 'read_all':
              ControllerTag.readAll()
              break;
            case 'update':
              var id = input[1]
              let updateTagObj = {
                name: input[0]
              }
              ControllerTag.update(updateTagObj, id)
              break;
            case 'delete':
              var id = input[0]
              ControllerTag.remove(id)
              break;
            default:
          }
      default:
    }
  }
}

Application.chooseMenu(command, input)