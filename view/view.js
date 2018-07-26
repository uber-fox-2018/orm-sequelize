class View {
  static show(data){
      console.log(data)
  }
  static showAll(data){
    data.forEach(element =>{
      console.log(element.get({plain:true}))
    })
  }
  static read_one(data){
    console.log(data)
    console.log("found your data!");
  }
  static add(data){
    console.log(data)
    console.log("sucsessfull add data!");
  }
  static update(){
    console.log("sucsessfull updated your data")
  }
  static updateFailed(){
    console.log("data not found")
  }
}

module.exports = View
