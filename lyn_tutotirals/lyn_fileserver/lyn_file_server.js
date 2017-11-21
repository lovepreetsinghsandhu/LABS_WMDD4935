let fs = require('fs')
let http = require('http')

let filename = process.argv[3]

let myserver = http.createServer(function(request, response) {
	fs.createReadStream(filename).pipe(response)
})

myserver.listen(process.argv[2])