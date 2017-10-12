let hapi = require("hapi")
let path = require("path")
let inert = require("inert")

let server = new hapi.Server({
    connections:{
        routes:{
            files:{
                relativeTo: path.join(__dirname, 'public')
            }
        }
    }
})

server.connection({
    port : Number(process.argv[2]) || 8080,
    host: "localhost"
})

server.register(inert,function (err) {
    if(err)
        throw err
})

server.route({
    method : 'GET',
    path : '/',
    handler : {
        file: 'index.html'
    }
})

server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
})