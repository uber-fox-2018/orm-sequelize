const chalk = require('chalk')
var Table = require('cli-table')

var table = new Table()

class View {
    static showError(err){
        console.log(err);
    }

    static showSuccess(data){
        console.log(data);
        
    }

    static showReadOne(data){
        table.push(
            [chalk.yellow('ID'), chalk.yellow('First Name'), chalk.yellow('Last Name'), chalk.yellow('Religion'), chalk.yellow('Gender'), chalk.yellow('Age')],
            [data.id, data.first_name,data.last_name,data.religion,data.gender,data.age]
        );
        console.log(chalk.cyanBright(table.toString()));
    }
}

module.exports = View

