let http = require('http')

let map = require('through2-map')

let uc_data = map(function(chunk) {
  return chunk.toString().toUpperCase()
});

let myserver = http.createServer(function(request, response) {
  if (request.method == 'POST') {
    request.pipe(uc_data).pipe(response)
  }
})

myserver.listen(process.argv[2])