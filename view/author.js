const Table = require('cli-table')
const chalk = require('chalk')

class ViewAuthor {
  static showMessageErr(err) {
    console.log(chalk.red(err))
  }

  static showMessage(msg) {
    console.log(chalk.green(msg))
  }
  
  static showAddSuccess(data) {
    const table = new Table()
    table.push(
      ['ID', 'First Name', 'Last Name', 'Religion', 'Gender', 'Age'],
      [ 
        chalk.red(data.id),
        chalk.yellow(data.first_name), 
        chalk.blue(data.last_name),
        chalk.cyan(data.religion),
        chalk.white(data.gender),
        chalk.magenta(data.age)
      ]
    )
    console.log(table.toString())
  }
  
  static showFindAuthor(data) {
    const table = new Table()

    table.push(
      ['ID', 'First Name', 'Last Name', 'Religion', 'Gender', 'Age'],
      [
        chalk.red(data.id),
        chalk.yellow(data.first_name), 
        chalk.blue(data.last_name),
        chalk.cyan(data.religion),
        chalk.white(data.gender),
        chalk.magenta(data.age)
      ] 
    )
    console.log(table.toString())
  }

  static showListAuthor(data) {
    const table = new Table()
    table.push(['ID', 'First Name', 'Last Name', 'Religion', 'Gender', 'Age'])
    data.map(listAuthor => {
      var list = []
      list.push(
        chalk.red(listAuthor.id),
        chalk.yellow(listAuthor.first_name),
        chalk.blue(listAuthor.last_name),
        chalk.cyan(listAuthor.religion),
        chalk.white(listAuthor.gender),
        chalk.magenta(listAuthor.age)
      )
      table.push(list)
    })
    console.log(table.toString())
  }
}

module.exports = ViewAuthor