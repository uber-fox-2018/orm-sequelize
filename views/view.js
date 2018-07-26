const Table = require('cli-table');
const chalk = require('chalk');

class View {

    static helpMenu() {
        console.log(['author add       ---> add <space> "input"',
        'author read_one  ---> read_one <space> "input id author"',
        'author read_all  ---> read_all',
        'author update    ---> update <space> "input data to update and input id"',
        'author delete    ---> delete <space> "input author id"',
        'article add      ---> add <space> "input"',
        'article read_one ---> read_one <space> "input id article"',
        'article read_all ---> read_all',
        'article update   ---> update <space> "input data to update and input id"',
        'article delete   ---> delete <space> "input article id"',
        'tag add          ---> add <space> "input"',
        'tag read_one     ---> read_one <space> "input id tag"',
        'tag read_all     ---> read_all',
        'tag update       ---> update <space> "input data to update and input id"',
        'tag delete       ---> delete <space> "input tag id"']);
    }

    static displayError(errMessage) {
        console.log(errMessage);
    }

    static displayMessage(msg) {
        console.log(msg);
    }

    static tableReadOne(input) {
        let table = new Table({
            chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
              , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
              , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
              , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
        })
        var headings = Object.keys(input);
        table.push(headings);
        let dataRow = [];
        for (let i in input) {
            dataRow.push(input[i])
        }
        table.push(dataRow);
        console.log(chalk.cyan(table.toString()));
    }

    static tableReadAll(input) {
        let table = new Table({
            chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
              , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
              , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
              , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
        })
        var headings = Object.keys(input[0]);
        table.push(headings);
        for (let i = 0; i < input.length; i++) {
            let dataRows = [];
            for (let j in input[i]) {
                dataRows.push(input[i][j])
            }
            table.push(dataRows);
        }
        console.log(chalk.green(table.toString()));
    }

}

module.exports = View;