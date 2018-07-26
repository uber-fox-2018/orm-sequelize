const Table = require('cli-table')
const chalk = require('chalk')

class MenuHelp {
  static showHelp() {
    let table = new Table()
    let listMenu = [
      'node index.js author add <first_name> <last_name> <religion> <gender> <age>',
      'node index.js author read_one <id>',
      'node index.js author read_all',
      'node index.js author update <id> <first_name> <last_name> <religion> <gender> <age>',
      'node index.js author delete <id>',
      'node index.js tag add <name>',
      'node index.js tag read_one <id>',
      'node index.js tag read_all',
      'node index.js tag update <id> <name>',
      'node index.js tag delete <id>',
      'node index.js article add <title> <body> <AuthorId> <TagId>',
      'node index.js article read_one <id>',
      'node index.js article read_all',
      'node index.js article update <id> <title> <body> <AuthorId> <TagId>',
      'node index.js article delete <id>'
    ]

    table.push(['NO', 'MENU'])
    listMenu.map((data, i) => {
      var isi = []
      isi.push(chalk.yellow(i+1), chalk.blue(data))
      table.push(isi)
    })
    console.log(table.toString())
  }
}

module.exports = MenuHelp