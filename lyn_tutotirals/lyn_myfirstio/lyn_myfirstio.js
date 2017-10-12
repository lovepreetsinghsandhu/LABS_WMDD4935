let fs = require("fs")

let file_name = process.argv[2]

let file = fs.readFileSync(file_name)

console.log(file.toString().split('\n').length-1)