class View {

    static showTable(result) {
        console.table(result);
    }

    static showError(err) {
        console.log(err);
        
    }

    static showResult(result) {
        console.log(result);
        
    }
}

module.exports = View;