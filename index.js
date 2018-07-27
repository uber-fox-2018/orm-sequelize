const ControllerAuthor = require('./controllers/author')
const ControllerArticle = require('./controllers/article')
const ControllerTag = require('./controllers/tag')

let argv = process.argv.slice(2)
let command = argv[0]
let operator = argv[1]

if(command == undefined || command == 'help'){
    console.log(['author add       ---> add <space> "input"',
             'author read_one  ---> read_one <space> "input id author"',
             'author read_all  ---> read_all',
             'author update    ---> update <space> "input data to update and input id"',
             'author delete    ---> delete <space> "input author id"',
             'tag add          ---> add <space> "input"',
             'tag read_one     ---> read_one <space> "input id author"',
             'tag read_all     ---> read_all',
             'tag update       ---> update <space> "input data to update and input id"',
             'tag delete       ---> delete <space> "input author id"',
             'article add      ---> add <space> "input"',
             'article read_one ---> read_one <space> "input id author"',
             'article read_all ---> read_all',
             'article update   ---> update <space> "input data to update and input id"',
             'article delete   ---> delete <space> "input author id"',])
    
}
switch (command) {
    case 'author':
        switch (operator) {
            case 'add':
                let firstName = argv[2]
                let lastName = argv[3]
                let religion = argv[4]
                let gender = argv[5]
                let age = argv[6]
                ControllerAuthor.add(firstName, lastName, religion, gender, age)
                break;
            case 'read_one':
                let id = argv[2]
                ControllerAuthor.read_one(id)
                break;
            case 'read_all':
                ControllerAuthor.read_all()
                break;
            case 'update':
                let idUpdate = argv[2]
                let firstNameUpdate = argv[3]
                ControllerAuthor.update(idUpdate, firstNameUpdate)
                break;
            case 'delete':
                let idDelete = argv[2]
                ControllerAuthor.delete(idDelete)
                break;
        }
        break;

        case 'tag':
        switch (operator) {
            case 'add':
                let name = argv[2]
                ControllerTag.add(name)
                break;
            case 'read_one':
                let id = argv[2]
                ControllerTag.read_one(id)
                break;
            case 'read_all':
                ControllerTag.read_all()
                break;
            case 'update':
                let idUpdate = argv[2]
                let nameUpdate = argv[3]
                ControllerTag.update(idUpdate, nameUpdate )
                break;
            case 'delete':
                let idDelete = argv[2]
                ControllerTag.delete(idDelete)
                break;
        }
        break;

        case 'article':
        switch (operator) {
            case 'add':
                let title = argv[2]
                let body = argv[3]
                let AuthorId = argv[4]
                let TagId = argv[5]
                ControllerArticle.add(title, body, AuthorId, TagId)
                break;
            case 'read_one':
                let id = argv[2]
                ControllerArticle.read_one(id)
                break;
            case 'read_all':
                ControllerArticle.read_all()
                break;
            case 'update':
                let idUpdate = argv[2]
                let titleUpdate = argv[3]
                ControllerArticle.update(idUpdate, titleUpdate )
                break;
            case 'delete':
                let idDelete = argv[2]
                ControllerArticle.delete(idDelete)
                break;
        }
        break;        
}
