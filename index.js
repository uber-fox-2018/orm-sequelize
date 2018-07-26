const Controller = require('./controller')

let argv = process.argv.slice(2)
let command1 = argv[0]
let command2 = argv[1]


if(command1 === 'author' && command2 === 'add'){
    let first_name = argv[2]
    let last_name = argv[3]
    let religion = argv[4]
    let gender = argv[5]

    Controller.addAuthor(first_name, last_name, religion, gender)
}

else if(command1 === 'author' && command2 === 'read_one'){
    let id = argv[2]
    Controller.showById(command1, id)
}

else if(command1 === 'author' && command2 === 'read_all'){
    Controller.showAll(command1)
}

else if(command1 === 'author' && command2 === 'update'){
    let column = argv[2]
    let id = argv[3]
    let pros = argv.slice(4)
    let update = pros.join(' ')
    Controller.update(command1, column, id, update)
}

else if(command1 === 'author' && command2 === 'delete'){
    let id = argv[2]
    Controller.delete(command1, id)
}

else if(command1 === 'tag' && command2 === 'add'){
    let name = argv[2]
    Controller.addTag(name)
}
else if(command1 === 'tag' && command2 === 'read_one'){
    let id = argv[2]
    Controller.showById(command1, id)
}
else if(command1 === 'tag' && command2 === 'read_all'){
    Controller.showAll(command1)
}
else if(command1 === 'tag' && command2 === 'update'){
    let column = argv[2]
    let id = argv[3]
    let pros = argv.slice(4)
    let update = pros.join(' ')
    Controller.update(command1, column, id, update)
}
else if(command1 === 'tag' && command2 === 'delete'){
    let id = argv[2]
    Controller.delete(command1, id)
}
else if(command1 === 'article' && command2 === 'add'){
    let title = argv[2]
    let body = argv[3]
    let authorId = argv[4]
    let tagId = argv[5]
    Controller.addArticle(title, body, authorId, tagId)
}
else if(command1 === 'article' && command2 === 'read_one'){
    let id = argv[2]
    Controller.showById(command1, id)
}
else if(command1 === 'article' && command2 === 'read_all'){
    Controller.showAll(command1)
}
else if(command1 === 'article' && command2 === 'update'){
    let column = argv[2]
    let id = argv[3]
    let pros = argv.slice(4)
    let update = pros.join(' ')
    Controller.update(command1, column, id, update)
}
else if(command1 === 'article' && command2 === 'delete'){
    let id = argv[2]
    Controller.delete(command1, id)
}