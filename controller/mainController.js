const View = require('../view/view');
class Controller {
  constructor() {
    this.view = new View();
  }

  help(help) {
    this.view.help(help);
  }
}

module.exports = Controller;