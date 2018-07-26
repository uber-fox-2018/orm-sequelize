const Table = require('cli-table')
const chalk = require('chalk')

class View {
  static showMessage(msg) {
    console.log(chalk.green(msg))
  }

  static showMessageErr(err) {
    console.log(chalk.red(err))
  }

  static showAddSuccess(data) {
    const table = new Table()
    table.push(
      [ 'ID', 'Title', 'Body', 'Author Id', 'Tag Id'],
      [
        chalk.cyan(data.id),
        chalk.green(data.title),
        chalk.magenta(data.body),
        chalk.blue(data.AuthorId),
        chalk.yellow(data.TagId)
      ]
    )
    console.log(table.toString())
  }

  static showFindArticle(data) {
    const table = new Table()
    table.push(
      [ 'ID', 'Title', 'Body', 'Author Id', 'Tag Id'],
      [
        chalk.cyan(data.id),
        chalk.green(data.title),
        chalk.magenta(data.body),
        chalk.blue(data.AuthorId),
        chalk.yellow(data.TagId)
      ]
    )
    console.log(table.toString())
  }

  static showAListArticle(data) {
    const tabel = new Table()
    tabel.push([ 'ID', 'Title', 'Body', 'Author Id', 'Tag Id'])
    data.map(listArticle => {
      var list = []
      list.push(
        chalk.cyan(listArticle.id),
        chalk.green(listArticle.title),
        chalk.magenta(listArticle.body),
        chalk.blue(listArticle.AuthorId),
        chalk.yellow(listArticle.TagId)
      )
      tabel.push(list)
    })
    console.log(tabel.toString())
  }

}

module.exports = View