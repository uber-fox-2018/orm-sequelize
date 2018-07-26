// model
const Model = require('./models');
const Author = Model.Author;
const Tag = Model.Tag;
const Article = Model.Article;

const View = require('./View')

class Controller {
    constructor(input) {
        this.input = input;
     
    }

    help() {
        // Tag.create({ name: 'fnord'})
        // .then(() => User.findOrCreate({where: {name: 'fnord'} }))

        Tag.findAll({raw:true},{
            where: {
                id : 1
            }
        })
        .then(function(tag) {
            console.log(tag);
        })
    }
}

module.exports = Controller