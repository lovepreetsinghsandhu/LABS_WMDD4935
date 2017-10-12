let fs = require('fs')
let path = require('path')

module.exports = function (dirName, fileExt, cb_fun){
	let filteredFileArray = [];

	fs.readdir(dirName, function (err, data) {
		if(err)
			return cb_fun(err)

		for (let i = 0; i < data.length; i++) {
			if(path.extname(data[i]) === '.' + fileExt){
				filteredFileArray.push(data[i])
			}
		}
		cb_fun(null,filteredFileArray)
	})
}