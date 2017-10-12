let Hapi = require('hapi')
let h2o2 = require('h2o2')

let server = new Hapi.Server();
server.connection({ 
  port: Number(process.argv[2]) || 8080, 
  host: 'localhost'
})

server.register(h2o2, function (err) {
  if (err) throw err;
})

server.route({
  method: 'GET',
  path: '/proxy',
  handler: {
    proxy: {
    	host: '127.0.0.1',
    	port: 65535
    }
  }
})

server.start((err) => {

    if (err) {
        console.log(err)
    }
    console.log('Server running at: ${server.info.uri}')
})