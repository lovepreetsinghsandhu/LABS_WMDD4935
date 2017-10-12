let fs = require("fs")

let file_name = process.argv[2]

let file = fs.readFile(file_name,function(err,data){
    console.log(data.toString().split('\n').length-1)
})