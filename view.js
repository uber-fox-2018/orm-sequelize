const chalk = require('chalk');

class View{
    static error(err){
        console.log(chalk.red(err));
    }

    static display(data){
        console.table(data);
    }

    static displaySuccess(id, data){
        if(data===0){
            console.log(chalk.red(`id: ${id} is not found!`));
        }else{
            console.log(chalk.green(`id: ${id} has been deleted!`));
        }
    }
    static help(){
        console.log(chalk.blue.bgWhite.bold("========documentation============================================ \n"));
        console.log(chalk.magenta("author add -> add<space> 'data yang ingin dimasukkan'"));
        console.log(chalk.magenta("author read_one -> read_one<space> 'masukkan id author'"));
        console.log(chalk.magenta("author read_all -> read_all"));
        console.log(chalk.magenta("author update -> update<space> 'masukkan data yang ingin di update dan idnya'"));
        console.log(chalk.magenta("author delete -> delete<space> 'masukkan id author'\n"));

        console.log(chalk.hex('#41f49d')("tag add -> add<space> 'data yang ingin dimasukkan'"));
        console.log(chalk.hex('#41f49d')("tag read_one -> read_one<space> 'masukkan id tag'"));
        console.log(chalk.hex('#41f49d')("tag read_all -> read_all"));
        console.log(chalk.hex('#41f49d')("tag update -> update<space> 'masukkan data yang ingin di update dan idnya'"));
        console.log(chalk.hex('#41f49d')("tag delete -> delete<space> 'masukkan id tag'\n"));

        console.log(chalk.hex('#DEADED')("article add -> add<space> 'data yang ingin dimasukkan'"));
        console.log(chalk.hex('#DEADED')("article read_one -> read_one<space> 'masukkan id article'"));
        console.log(chalk.hex('#DEADED')("article read_all -> read_all"));
        console.log(chalk.hex('#DEADED')("article update -> update<space> 'masukkan data yang ingin di update dan idnya'"));
        console.log(chalk.hex('#DEADED')("article delete -> delete<space> 'masukkan id article'"));
        console.log(chalk.blue.bgWhite.bold("\n================================================================="));

    }
}

module.exports = View;
