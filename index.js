const ControllerAuthor  = require('./controllers/controller-author')
const ControllerArticle = require('./controllers/controller-article')
const ControllerTag = require('./controllers/controller-tag')

const argv = process.argv
const command = argv[2]
const parameter = argv[3]

if (command == 'help') {
    console.log(`=============================documentation====================================`);
    console.log(`author add --> add<space> "data yangingin dimasukan"`);
    console.log(`author read_one --> read_one<space> "masukan id author"`);
    console.log(`author read_all --> read_all`);
    console.log(`author update --> update<space> "masukan data yang ingin di update dan idnya"`);
    console.log(`author delete --> delete<space> "masukan id author"`);
    console.log(`tag add --> add<space> "data yangingin dimasukan"`);
    console.log(`tag read_one --> read_one<space> "masukan id tag"`);
    console.log(`tag read_all --> read_all`);
    console.log(`tag update --> update<space> "masukan data yang ingin di update dan idnya"`);
    console.log(`tag delete --> delete<space> "masukan id tag"`);
    console.log(`article add --> add<space> "data yangingin dimasukan"`);
    console.log(`article read_one --> read_one<space> "masukan id article"`);
    console.log(`article read_all --> read_all`);
    console.log(`article update --> update<space> "masukan data yang ingin di update dan idnya"`);
    console.log(`article delete --> delete<space> "masukan id article"`);
    console.log(`===============================================================================`);
}else if (command == 'author') {
    if (parameter == 'add') {
        let first_name = argv[4]
        let last_name = argv[5]
        let religion = argv[6]
        let gender = argv[7]
        let age = argv[8]
        ControllerAuthor.add(first_name,last_name,religion,gender,age)
    }else if (parameter == 'read_one') {
        let id = argv[4]
        ControllerAuthor.readOne(id)
    }else if (parameter == 'read_all') {
        ControllerAuthor.readAll()
    }else if (command == 'update') {
        let id = argv[4]
        let first_name = argv[5]
        let last_name = argv[6]
        let religion = argv[7]
        let gender = argv[8]
        let age = argv[9]
        ControllerAuthor.remove(id,first_name,last_name,religion,gender,age)
    }else if (parameter == 'delete') {
        let id = argv[4]
        ControllerAuthor.remove(id)
    }
}else if (command == 'article') {
    if (parameter == 'add') {
        let title = argv[4]
        let body = argv[5]
        let AuthorId = argv[6]
        let TagId = argv[7]
        ControllerArticle.add(title,body,AuthorId,TagId)
    }else if (parameter == 'read_one') {
        let id = argv[4]
        ControllerArticle.readOne(id)
    }else if (parameter == 'read_all') {
        ControllerArticle.readAll()
    }else if (command == 'update') {
        let id = argv[4]
        let first_name = argv[5]
        let last_name = argv[6]
        let religion = argv[7]
        let gender = argv[8]
        let age = argv[9]
        ControllerArticle.remove(id,first_name,last_name,religion,gender,age)
    }else if (parameter == 'delete') {
        let id = argv[4]
        ControllerArticle.remove(id)
    }
}else if (command == 'tag') {
    if (parameter == 'add') {
        let name = argv[4]
        ControllerTag.add(name)
    }else if (parameter == 'read_one') {
        let id = argv[4]
        ControllerTag.readOne(id)
    }else if (parameter == 'read_all') {
        ControllerTag.readAll()
    }else if (command == 'update') {
        let id = argv[4]
        let name = argv[5]
        ControllerTag.remove(id,name)
    }else if (parameter == 'delete') {
        let id = argv[4]
        ControllerTag.remove(id)
    }
}