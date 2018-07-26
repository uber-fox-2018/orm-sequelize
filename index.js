const Author = require("./controllers/author");
const Article = require("./controllers/article");
const Tag = require("./controllers/tag");

const argv = process.argv.slice(2);
const target = argv[0];
const order1 = argv[1];
const id = argv[2];
let command;
let fName = argv[2];
let lName = argv[3];
let religion = argv[4];
let gender = argv[5];
let age = argv[6];
let columnName = argv[2];
let newValue = argv[3]; 
let targetId = argv[4];
let title = argv[2];
let body = argv[3];
let AuthorId = argv[4];
let TagId = argv[5];
let name = argv[2];

if(target==="help"){
    command = "help";
}else if(target === "author"){
    if(order1 === "read_one"){
        command = "authorReadOne";
    }else if(order1 === "add"){
        command = "authorAdd";
    }else if(order1 === "read_all"){
        command = "authorReadAll";
    }else if(order1 === "update"){
        command = "authorUpdate";
    }else if(order1 === "delete"){
        command = "authorDelete";
    }
}else if(target === "article"){
    if(order1 === "read_one"){
        command = "articleReadOne";
    }else if(order1 === "add"){
        command = "articleAdd";
    }else if(order1 === "read_all"){
        command = "articleReadAll";
    }else if(order1 === "update"){
        command = "articleUpdate";
    }else if(order1 === "delete"){
        command = "articleDelete";
    }
}else if(target === "tag"){
    if(order1 === "read_one"){
        command = "tagReadOne";
    }else if(order1 === "add"){
        command = "tagAdd";
    }else if(order1 === "read_all"){
        command = "tagReadAll";
    }else if(order1 === "update"){
        command = "tagUpdate";
    }else if(order1 === "delete"){
        command = "tagDelete";
    }
}

switch(command){
    case "authorAdd":
        Author.add(fName, lName, religion, gender, age);
        break;
    case "authorReadOne":
        Author.read_one(id);
        break;
    case "authorReadAll":
        Author.read_all();
        break;
    case "authorUpdate":
        Author.update(columnName, newValue, targetId);
        break;
    case "authorDelete":
        Author.delete(id);
        break;
    case "articleReadOne":
        Article.read_one(id);
        break;
    case "articleAdd":
        Article.add(title, body, AuthorId, TagId);
        break;
    case "articleReadAll":
        Article.read_all();
        break;
    case "articleUpdate":
        Article.update(columnName, newValue, targetId);
        break;
    case "articleDelete":
        Article.delete(id);
        break;
    case "tagReadOne":
        Tag.read_one(id);
        break;
    case "tagAdd":
        Tag.add(name);
        break;
    case "tagReadAll":
        Tag.read_all();
        break;
    case "tagUpdate":
        Tag.update(columnName, newValue, targetId);
        break;
    case "tagDelete":
        Tag.delete(id);
        break;
    case "help":
        Author.help();
        break;
    case undefined:
        Author.help();
        break;
    default:
        Author.help();
        break;
}


