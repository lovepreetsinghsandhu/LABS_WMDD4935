let http = require('http')

let client_urls = process.argv.slice(2)
let results = []


for (let i = 0; i < client_urls.length; i++) {
  results[i] = null
}

for (let i = 0; i < client_urls.length; i++) {
  (function(i) {
    http.get(client_urls[i], function(res) {
      let result = ""
      res.setEncoding("utf8")
      res.on("data", function(data) {
        result += data
      });
      res.on("error", function(err) {
        console.log(err)
      });
      res.on("end", function() {
        results[i] = result
        let resultCount = 0
        for (let j = 0; j < results.length; j++) {
          if (results[j] != null) resultCount++
        }
        if (resultCount == results.length) {
          for (let j = 0; j < results.length; j++) {
            console.log(results[j])
          }
        }
      })
    })
  })(i)
}