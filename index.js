const argv = process.argv.slice(2)
const Controller = require('./Controller.js');

class Routes {
    constructor(input) {
        this.input = input
        this.route()
    }

    route() {
        let cmd = this.input[0]
        let ctr = new Controller(this.input)
        switch (cmd) {
            case 'help':
                ctr.help()
                break;

            case 'article':
                if(this.input[0] == 'article' && this.input[1] == 'add') {
                    ctr.prodHouseAdd()
                }

            case 'author':
                if(this.input[0] == 'author' && this.input[1] == 'add') {
                    ctr.movieAdd()
                } 

            case 'tag':
                if(this.input[0] == 'tag' && this.input[1] == 'add') {
                    ctr.movieAdd()
                } 
                
                break;
        
            default:
                ctr.help()
                break;
        }
    }
}

new Routes(argv)
