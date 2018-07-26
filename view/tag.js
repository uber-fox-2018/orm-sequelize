const Table = require('cli-table')
const chalk = require('chalk')

class ViewTag {
  static showAddSuccess(data) {
    const table = new Table()
    table.push(
      ['ID', 'Name Tag'],
      [
        chalk.yellow(data.id), 
        chalk.green(data.name)
      ]
    )  
    console.log(table.toString())  
  }

  static showMessage(msg) {
    console.log(chalk.green(msg))
  }

  static showMessageErr(err) {
    console.log(chalk.red(err))
  }

  static showListTag(data) {
    const table = new Table()

    table.push(['ID', 'Name Tag'])
    data.map(tag => {
      var list = []
      list.push(
        chalk.yellow(tag.id), 
        chalk.green(tag.name)
      )
      table.push(list)
    })
    console.log(table.toString())
  }

  static showFindTag(data) {
    const table = new Table()
    table.push(
      ['ID', 'Name Tag'],
      [
        chalk.yellow(data.id), 
        chalk.green(data.name)
      ]
    )
    console.log(table.toString())
  }

}

module.exports = ViewTag