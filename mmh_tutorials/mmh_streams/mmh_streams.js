var fs = require('fs')
var hapi = require('hapi')
var path = require('path')
var rot13 = require('rot13-transform')

var server = new hapi.Server()

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
})

server.route({
    method: 'GET',
    path: '/',
    config: {
        handler: myhandle
    }
})

function myhandle(request, reply) {
    var thisfile = fs.createReadStream(path.join(__dirname, 'myinput.txt'))
    reply(thisfile.pipe(rot13()))
}

server.start((err) => {

    if (err) {
        console.log(err)
    }
    console.log('Server running at: ${server.info.uri}')
})