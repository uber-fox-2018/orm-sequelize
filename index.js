
let Controller = require('./controller.js')

let argv = process.argv
let tabel = argv[2]
let menu = argv[3]

if(tabel === undefined||`help`){
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

if (tabel === 'author'){
    if(menu === 'add'){
        let first_name = argv[4]
        let last_name = argv[5]
        let religion = argv[6]
        let gender = argv[7]
        let age = argv[8]
        Controller.c_addAuthor(first_name,last_name,religion,gender,age)

    }else if( menu === 'readOne'){
        let id = argv[4]
        Controller.c_one(id)
    }else if(menu === 'readAll'){
        Controller.c_all()

    }else if(menu === 'update'){
        let id = argv[4]
        let first_name = argv[5]
        Controller.c_update(id,first_name)
    }else if( menu === 'delete'){
        let id = argv[4]
        Controller.c_destroy(id)
    }
} else if (table === 'tag'){
    if(menu === 'add'){
        let name = argv[4]
        Controller.c_add(name)

    }else if( menu === 'readOne'){
        let id = argv[4]
        Controller.c_one(id)
    }else if(menu === 'readAll'){
        Controller.c_all()

    }else if(menu === 'update'){
        let id = argv[4]
        let name = argv[5]
        Controller.c_update(id,name)
    }else if( menu === 'delete'){
        let id = argv[4]
        Controller.c_destroy(id)
    }
    
} else if (table === 'article'){
    if(menu === 'add'){
        let title = argv[4]
        let body = argv[5]
        Controller.c_add(title,body)

    }else if( menu === 'readOne'){
        let id = argv[4]
        Controller.c_one(id)
    }else if(menu === 'readAll'){
        Controller.c_all()

    }else if(menu === 'update'){
        let id = argv[4]
        let title = argv[5]
        Controller.c_update(id,title)
    }else if( menu === 'delete'){
        let id = argv[4]
        Controller.c_destroy(id)
    }
    
}