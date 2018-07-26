const chalk = require('chalk')

class View{
    
    static createMessageAllert(param){
        console.log(chalk.blue(param))
    }

    static showById(param){
        console.log(chalk.blue(param))
    }

    static showAll(param){
        console.log(param)
    }

    static update(param){
        if(param[0] == 1){
            console.log('data berhasil di update !!')
        }
        else{
            console.log('data gagal di update !!')
        }
    }

    static delete(param){
        if(param == 1){
            console.log('data berhasil di hapus !!')
        }
        else{
            console.log('data gagal di hapus !!')
        }
    }
}

module.exports = View