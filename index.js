const ControllerAuthor = require('./controller/controllerAuthor.js')

const argv = process.argv
const execute = argv[2]
const command = argv[3]


if (execute == 'author') {
    if (command == 'add') {
        ControllerAuthor.addAuthor(argv[4], argv[5], argv[6], argv[7], argv[8])
    } else if (command == 'read_one') {
        ControllerAuthor.readOneAuthor(argv[4])
    } else if (command == 'read_all') {
        ControllerAuthor.readAllAuthor()
    } else if (command == 'update') {
        ControllerAuthor.updateAuthor(argv[4], argv[5], argv[6], argv[7], argv[8], argv[9])
    } else if (command == 'erase') {
        ControllerAuthor.eraseAuthor(argv[4])
    } else {
        console.log('command not found');
    }
}

/*
    -   author add
    -   author read_one <id>
    -   author read_all 
    -   author update 
    -   author delete <id>

    -   tag add
    -   tag read_one 
    -   tag read_all
    -   tag update
    -   tag delete

    -   article add
    -   article read_one 
    -   article read_all
    -   article update
    -   article delete
*/