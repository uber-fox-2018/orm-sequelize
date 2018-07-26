const View = require('./view')

class TagView extends View {
  constructor() { }

  static displayHelp() {
    console.log(`$node index.js tag add <name>`)
    console.log(`$node index.js tag read_one <tag_id>`)
    console.log(`$node index.js tag read_all`)
    console.log(`$node index.js tag update <tag_id> <name>`)
    console.log(`$node index.js tag delete <tag_id>`)
  }

  static displayOne(tag) {
    if(tag)
      console.log(tag.get({plain: true}))
  }

  static displayAll(tags) {
    tags.forEach(author => {
      this.displayOne(author)
    })
  }

  static displayAddSuccess(newTag) {
    console.log(`Successfully added new tag.`)
    this.displayOne(newTag)
  }

  static displayUpdateSuccess(id) {
    console.log(`Successfully updated tag with id: ${id}`)
  }

  static displayDeleteSuccess(id) {
    console.log(`Successfully deleted tag with id: ${id}`)
  }

  static displayDataNotFound() {
    console.log(`Data not found.`)
  }
}

module.exports = TagView