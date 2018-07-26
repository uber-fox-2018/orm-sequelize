class View{

    static add(){
        console.log('insert data success')
    }

    static errAdd(){
        console.log('insert data failed')
    }

    static update(){
        console.log('data has been updated')
    }

    static errUpdate(){
        console.log('update data failed');
    }

    static read(data){
        console.log(data);    
    }

    static dataNotFound(){
        console.log(`data not found`);
    }

    static delete(){
        console.log('data has been deleted')
    }

    static errDelete(){
        console.log('delete data failed');
        
    }

}

module.exports = View