let fs = require("fs")
let path = require("path")

let file_path = process.argv[2]
let file_name = process.argv[3]

let file = fs.readdir(file_path,function (err,data) {
    for (let i = 0; i< data.length; i++ ) {
        if (path.extname(data[i]) === '.' + file_name) {
            console.log(data[i])
        }
    }
})