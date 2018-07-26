class View{

    static menu(){
        console.log();
        
        console.log('======================= MENU =======================');
        console.log();
        
        console.log('$ node index.js author add <value>');
        console.log('$ node index.js author read_one <value>');
        console.log('$ node index.js author read_all');
        console.log('$ node index.js author update <value> <identifier>');
        console.log('$ node index.js author delete <value>');
        console.log('$ node index.js tag add <value>');
        console.log('$ node index.js tag read_one <value>');
        console.log('$ node index.js tag read_all');
        console.log('$ node index.js tag update <value> <identifier>');
        console.log('$ node index.js tag delete <value>');
        console.log('$ node index.js article add <value>');
        console.log('$ node index.js article read_one <value>');
        console.log('$ node index.js article read_all');
        console.log('$ node index.js article update <value> <identifier>');
        console.log('$ node index.js article delete <value>');
        console.log();
        
        console.log('=================== ORM SEQUELIZE ======================');
    }
    static show(info){
        console.log(info);
        
    }

    static table(data){
        console.table(data);
        
    }

}

module.exports = View