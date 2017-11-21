let Hapi = require('hapi')
let path = require('path')
var Vision = require('vision')

let server = new Hapi.Server()
server.connection({ 
  port: Number(process.argv[2]) || 8080, 
  host: 'localhost'
})

server.register(Vision, function (err) {
  if (err) throw err
})

server.views({
    engines: {
      html: require('handlebars')
    },
    path: path.join(__dirname, 'templates')
    
})

server.route({
  method: 'GET',
  path: '/',
  handler: {
    view: 'index.html'
  }
})

server.start((err) => {

    if (err) {
        console.log(err)
    }
    console.log('Server running at: ${server.info.uri}')
})