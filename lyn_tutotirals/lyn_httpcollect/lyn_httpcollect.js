let http = require('http')

let client_url = process.argv[2]

http.get(client_url, function(res) {
  let result = ""
  res.setEncoding("utf8")
  res.on("data", function(data) {
    result += data
  });
  res.on("end", function() {
    console.log(result.length)
    console.log(result)
  });
  res.on("error", function(err) {
    console.log(err)
  });
});