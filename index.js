const controllerArticle = require('./controller/article')
const controllerAuthor = require('./controller/author')
const controllerTag = require('./controller/tag')
const controllerHelp = require('./controller/menu_help')
const [ menu, command, ...args ] = process.argv.slice(2)

switch(menu) {
  case 'author': {
    switch(command) {
      case 'add': {
        controllerAuthor.add(...args)
        break
      }
      case 'read_one': {
        controllerAuthor.readOne(...args)
        break
      }
      case 'read_all': {
        controllerAuthor.readAll()
        break
      }
      case 'update': {
        controllerAuthor.update(...args)
        break
      }
      case 'erase': {
        controllerAuthor.remove(...args)
        break
      }
      default: {
        controllerHelp.showHelp()
      }
    }
    break
  }
  case 'tag': {
    switch(command) {
      case 'add': {
        controllerTag.add(...args)
        break
      }
      case 'read_one': {
        controllerTag.readOne(...args)
        break
      }
      case 'read_all': {
        controllerTag.readAll()
        break
      }
      case 'update':{
        controllerTag.update(...args)
        break
      }
      case 'erase': {
        controllerTag.remove(...args)
        break
      }
      default: {
        controllerHelp.showHelp()
      }
    }
    break
  }
  case 'article': {
    switch(command) {
      case 'add': {
        controllerArticle.add(...args)
        break
      }
      case 'read_one': {
        controllerArticle.readOne(...args)
        break
      }
      case 'read_all': {
        controllerArticle.readAll()
        break
      }
      case 'update': {
        controllerArticle.update(...args)
        break
      }
      case 'erase': {
        controllerArticle.remove(...args)
      }
      default: {
        controllerHelp.showHelp()
      }
    }
    break
  }
  default: {
    controllerHelp.showHelp()
  }
}