let my_dir_filter = require('./my_dir_filter')

my_dir_filter(process.argv[2],process.argv[3],function (err,data) {
	if (err) {
		return console.log("Error occured" + err)
	}
	for (let i = 0; i < data.length; i++) {
		console.log(data[i])
	}
})
