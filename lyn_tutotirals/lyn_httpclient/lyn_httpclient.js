let http = require('http')
let client_url = process.argv[2]

http.get(client_url, function(res) {
    res.setEncoding("utf8");
    res.on("error", function(err) {
        console.log(err);
    })
    res.on("data", function(data) {
        console.log(data);
    })
})