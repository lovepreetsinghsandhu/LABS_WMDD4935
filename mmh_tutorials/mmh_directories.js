let hapi = require("hapi")
let path = require("path")
let inert = require("inert")

let server = new hapi.Server({
    connections:{
        routes:{
            files:{
                relativeTo: __dirname
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
    path : '/foo/bar/baz/{param}',
    handler : {
        directory: { 
            path: './public' 
            
        }
    }
})

server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
})