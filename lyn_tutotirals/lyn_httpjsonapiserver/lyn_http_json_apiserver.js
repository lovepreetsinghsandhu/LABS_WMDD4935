let http = require('http')
let url = require('url')

let my_routes = {
  "/api/parsetime": function(parsedUrl) {
    let date = new Date(parsedUrl.query.iso)
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }
  },
  "/api/unixtime": function(parsedUrl) {
    return {
      unixtime: (new Date(parsedUrl.query.iso)).getTime()
    }
  }
}

let myserver = http.createServer(function(request, response) {
  let my_parsedUrl = url.parse(request.url, true)
  let my_resource = my_routes[my_parsedUrl.pathname]
  if (my_resource) {
    response.writeHead(200, {"Content-Type": "application/json"})
    response.end(JSON.stringify(my_resource(my_parsedUrl)))
  }
  else {
    response.writeHead(404)
    response.end()
  }
})

myserver.listen(process.argv[2])