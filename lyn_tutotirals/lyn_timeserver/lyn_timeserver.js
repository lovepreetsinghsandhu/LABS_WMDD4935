let net = require('net')

let myserver = net.createServer(function(socket) {
	let date = new Date()
  	let data = date.getFullYear() + "-"
    		+ formatNumber(date.getMonth() + 1) + "-"
    		+ formatNumber(date.getDate()) + " "
    		+ formatNumber(date.getHours()) + ":"
    		+ formatNumber(date.getMinutes()) + "\n"
  	socket.end(data)
})

function formatNumber(n) {
	return n < 10 ? '0' + n : n 
}

myserver.listen(process.argv[2])