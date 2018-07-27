const argv = process.argv
const type = argv[2]
const command = argv[3]

const ControllerAuthor = require('./controllers/controller-author')
const ControllerArticle = require('./controllers/controller-article')
const ControllerTag = require('./controllers/controller-tag')

if (type == 'help') {
    console.log(` ==============================================================================================
        1.     author add -> add <first_name> <last_name> <religion> <gender> <age>
        2.     author read_one -> read_one<space>"masukkan id author"
        3.     author read_all -> read_all
        4.     author update -> update <id> <column> <value> 
        5.     author delete -> delete<space>"masukkan id author"
        6.     tag add -> add <name>
        7.     tag read_one -> read_one<space>"masukkan id tag"
        8.     tag read_all -> read_all
        9.     tag update -> update <id> <column> <value>
        10.    tag delete -> delete<space>"masukkan id tag"
        11.    article add -> add <title> <body> <authorId> <tagId>
        12.    article read_one -> read_one<space>"masukkan id article"
        13.    article read_all -> read_all
        14.    article update -> update <id> <column> <value>
        15.    article delete -> delete<space>"masukkan id article"
    ==============================================================================================`)
} else if (type == 'author') {
    if (command == 'add') {
        let first_name = argv[4]
        let last_name = argv[5]
        let religion = argv[6]
        let gender = argv[7]
        let age = argv[8]
        ControllerAuthor.add(first_name, last_name, religion, gender, age)
    } else if (command == 'read_one') {
        let id = argv[4]
        ControllerAuthor.read_one(id)
    } else if (command == 'read_all') {
        ControllerAuthor.read_all()
    } else if (command == 'update') {
        let id = argv[4]
        let column = argv[5]
        let value = argv[6]
        ControllerAuthor.update(id,column, value)
    } else if (command == 'erase') {
        let id = argv[4]
        ControllerAuthor.erase(id)
    }
} else if (type == 'tag') {
    if (command == 'add') {
        let name = argv[4]
        ControllerTag.add(name)
    } else if (command == 'read_one') {
        let id = argv[4]
        ControllerTag.read_one(id)
    } else if (command == 'read_all') {
        ControllerTag.read_all()
    } else if (command == 'update') {
        let column = argv[4]
        let value = argv[5]
        ControllerTag.update(id,column, value)
    } else if (command == 'erase') {
        let id = argv[4]
        ControllerTag.erase(id)
    }
} else if (type == 'article') {
    if (command == 'add') {
        let title = argv[4]
        let body = argv[5]
        let AuthorId = argv[6]
        let TagId = argv[7]
        ControllerArticle.add(title, body, AuthorId, TagId)
    } else if (command == 'read_one') {
        let id = argv[4]
        ControllerArticle.read_one(id)
    } else if (command == 'read_all') {
        ControllerArticle.read_all()
    } else if (command == 'update') {
        let id = argv[4]
        let column = argv[5]
        let value = argv[6]
        ControllerArticle.update(id,column, value)
    } else if (command == 'erase') {
        let id = argv[4]
        ControllerArticle.erase(id)
    }
}