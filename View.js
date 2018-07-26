class View {
    static help() {
        console.log(`node index.js prodHouse add [name_prodHouse] [origin_city]`);
        console.log(`node index.js movie add [name] [released_year] [genre] [rating] [prodHouseId]`);
        console.log(`node index.js movie delete [id]`);     
        console.log(`node index.js movie showRecommendations`);
    }

    static Display(msg) {
        console.log(msg)
    }

    static DisplayData(data) {
        for(let i in data) {
            let tampil = `.${data[i].judul} ${data[i].genre} (${data[i].rating}) by ${data[i].nama_prodHouse}`
            console.log(Number(i)+1 + tampil)
        }
    }

}

module.exports = View;