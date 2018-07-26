let argv = process.argv
let command = argv[2]
var authorController = require('./controller/author')
var tagController = require('./controller/tag')
var articleController = require('./controller/article')
var indexController = require('./controller/index')

switch (command) {
    case 'author':
        if(argv[3] === 'add'){
            var first_name = argv[4]
            var last_name = argv[5]
            var religion = argv[6]
            var gender = argv[7]
            var age = argv[8]
            authorController.add(first_name,last_name,religion,gender,age)
        }
        
        if(argv[3] === 'read_one'){
            var id = argv[4]
            authorController.readById(id)
        }

        if(argv[3] === 'read_all'){
            authorController.readAll()
        }

        if(argv[3] === 'update'){
            var id = argv[4]
            var first_name = argv[5]
            var last_name = argv[6]
            var religion = argv[7]
            var gender = argv[8]
            var age = argv[9]
            authorController.update(id,first_name,last_name,religion,gender,age)
        }

        if(argv[3] === 'delete'){
            var id = argv[4]
            authorController.delete(id)
        }
                    break;

    case 'tag' : 
        if(argv[3] === 'add'){
            var data = {
                name : argv[4]
            }
            tagController.add(data)
        }

        if(argv[3] === 'read_one'){
            var id = argv[4]
            tagController.findById(id)
        }

        if(argv[3] === 'read_all'){
            tagController.findAll()
        }

        if(argv[3] === 'update'){
            var identifier = {
                id : argv[4]
            }

            var dataUpdate =  {
                name : argv[5]
            }


            tagController.update(identifier,dataUpdate)
        }

        if(argv[3] === 'delete'){
            var identifier = {
                id : argv[4]
            }

            tagController.delete(identifier)
        }
        break;

    case 'article' : 
        if(argv[3] === 'add'){
            var data = {
                title : argv[4],
                body : argv[5],
                AuthorId : argv[6],
                TagId : argv[7]
            }
            articleController.add(data)
        }

        if(argv[3] === 'read_one'){
            var id = argv[4]
            articleController.findById(id)
        }

        if(argv[3] === 'read_all'){
            articleController.findAll()
        }

        if(argv[3] === 'update'){
            var identifier = {
                id : argv[4]
            }

            var dataUpdate =  {
                title : argv[5],
                body : argv[6],
                AuthorId : argv[7],
                TagId : argv[8]
            }
            articleController.update(identifier,dataUpdate)
        }

        if(argv[3] === 'delete'){
            var identifier = {
                id : argv[4]
            }

            articleController.delete(identifier)
        }
        break;
    
    case 'help' : 
        indexController.menu()
        break;

    default: indexController.menu()
        break;
}

