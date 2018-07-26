const ControllerAuthor = require('./controller/author')
const ControllerArticle = require('./controller/article')
const ControllerTag = require('./controller/tag')
const args = process.argv.slice(2)
const table = args[0]
const command = args[1]
const input1 = args[2]
const input2 = args[3]
const input3 = args[4]
const input4 = args[5]
const input5 = args[6]

if (table === 'help') {
    console.log(`
        ====documentation===============================================
        author add -> add<space> "data yang ingin dimasukan"
        author read_one -> read_one<space> "masukkan id author"
        author read_all -> read_all
        author update -> update<space> "masukkan data yang ingin di update dan idnya"
        author delete -> delete<space> "masukkan id author"
        tag add -> add<space> "data yang ingin dimasukan"
        tag read_one -> read_one<space> "masukkan id tag"
        tag read_all -> read_all
        tag update -> update<space> "masukkan data yang ingin di update dan idnya"
        tag delete -> delete<space> "masukkan id author"
        article add -> add<space> "data yang ingin dimasukan"
        article read_one -> read_one<space> "masukkan id article"
        article read_all -> read_all
        article update -> update<space> "masukkan data yang ingin di update dan idnya"
        article delete -> delete<space> "masukkan id author"
        ================================================================
        `);
} else 
if (table === 'author' && command === 'add' && input1 !== undefined && input2 !== undefined && input3 !== undefined && input4 !== undefined && input5 !== undefined) {
    ControllerAuthor.add(input1,input2,input3,input4,input5)
} else if(table === 'author' && command === 'read_one' && input1 !== undefined){
    ControllerAuthor.read_one(input1)
} else if(table === 'author' && command === 'read_all'){
    ControllerAuthor.read_all()
} else if(table === 'author' && command === 'update' && input1 !== undefined && input2 !== undefined && input3 !== undefined){
    ControllerAuthor.update(input1,input2,input3)
} else if(table === 'author' && command === 'delete' && input1 !== undefined){
    ControllerAuthor.delete(input1)
} else 
if (table === 'article' && command === 'add' && input1 !== undefined && input2 !== undefined && input3 !== undefined && input4 !== undefined && input5 !== undefined) {
    ControllerArticle.add(input1,input2,input3,input4)
} else if(table === 'article' && command === 'read_one' && input1 !== undefined){
    ControllerArticle.read_one(input1)
} else if(table === 'article' && command === 'read_all'){
    ControllerArticle.read_all()
} else if(table === 'article' && command === 'update' && input1 !== undefined && input2 !== undefined && input3 !== undefined){
    ControllerArticle.update(input1,input2,input3)
} else if(table === 'article' && command === 'delete' && input1 !== undefined){
    ControllerArticle.delete(input1)
}else 
if (table === 'tag' && command === 'add' && input1 !== undefined) {
    ControllerTag.add(input1)
} else if(table === 'tag' && command === 'read_one' && input1 !== undefined){
    ControllerTag.read_one(input1)
} else if(table === 'tag' && command === 'read_all'){
    ControllerTag.read_all()
} else if(table === 'tag' && command === 'update' && input1 !== undefined && input2 !== undefined && input3 !== undefined){
    ControllerTag.update(input1,input2,input3)
} else if(table === 'tag' && command === 'delete' && input1 !== undefined){
    ControllerTag.delete(input1)
}

