let input = process.argv.slice(3)
let command = process.argv[2]
let addData =input.slice(1)
const Control = require('./control/ControlAuthor.js');
const ControlArticle = require('./control/controlArticle.js');
const ControlTag = require('./control/controlTag.js');

switch (command) {
  case "help":
    console.log("=============================== documentation =====================================");
    console.log("author add -> add <space> 'data yang ingin dimasukan' ");
    console.log("author read_one -> read_one <space> 'masukan id author' ");
    console.log("author read_all -> read_all");
    console.log("author update -> update <space> 'Masukan data yang ingin di update dan id nya' ");
    console.log("author delete -> delete <space> 'Masukan id author' ");
    console.log("tag add -> add <space> 'data yang ingin di update dan id nya' ");
    console.log("tag read_one -> read_one <space> 'masukan id tag'");
    console.log("tag read_all -> read all");
    console.log("tag update -> update <space> 'masukkan data yang ingin di update dan idnya' ");
    console.log("tag delete -> delete <space> 'masukan id author'");
    console.log("article add -> add <space> 'data yang ingin di masukan' ");
    console.log("article read_one -> read_one <space> 'masukan article id' ");
    console.log("article read_all -> read_all");
    console.log("article update -> update <space> 'masukkan data yang ingin di update dan idnya' ");
    console.log("article delete -> delete <space> 'masukkan' ");
    console.log("==================================================================================");
    break;

    case "author":

        switch (input[0]) {
          case "add":
            Control.add(addData[0],addData[1],addData[2],addData[3],addData[4])
            break;
          case "read_one":
            Control.read_one(input[1])
            break;
          case "read_all":
            Control.read_all()
            break;
          case "update":
            Control.update(addData[0],addData[1],addData[2],addData[3],addData[4],addData[5])
            break;
          case "delete":
            Control.delete(addData[0])
            break;
        }
      break;

    case "tag":
        switch (input[0]) {
          case "add":
            ControlTag.add(addData[0])
            break;
          case "read_one":
            ControlTag.read_one(input[1])
            break;
          case "read_all":
            ControlTag.read_all()
            break;
          case "update":
            ControlTag.update(addData[0],addData[1])
            break;
          case "delete":
            ControlTag.delete(addData[0])
            break;
        }
      break;

    case "article":
        switch (input[0]) {
          case "add":
            ControlArticle.add(addData[0],addData[1],addData[2],addData[3])
            break;
          case "read_one":
            ControlArticle.read_one(input[1])
            break;
          case "read_all":
            ControlArticle.read_all()
            break;
          case "update":
            ControlArticle.update(addData[0],addData[1],addData[2],addData[3],addData[4])
            break;
          case "delete":
            ControlArticle.delete(addData[0])
            break;
        }
      break;
}
