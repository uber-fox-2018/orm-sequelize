class View {
    static displayError(err) {
        console.log(err)
    }

    static displayMessage(message) {
        console.log(message)
    }

    static displayTable(result) {
        console.table(result)
    }
}

module.exports = View