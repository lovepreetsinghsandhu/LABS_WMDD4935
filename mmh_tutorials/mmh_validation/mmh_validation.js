var hapi = require('hapi')
var joi = require('joi')

var server = new hapi.Server()

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
})

server.route({
    method: 'GET',
    path: '/chickens/{breed}',
    config: {
        handler: myhandle,
        validate: {
            params: {
                breed: joi.string().required()
            }
        }
    }
})

function myhandle(request, reply) {
    reply('You asked the chicken ' + request.params.breed)
}

server.start((err) => {

    if (err) {
        console.log(err)
    }
    console.log('Server running at: ${server.info.uri}')
})