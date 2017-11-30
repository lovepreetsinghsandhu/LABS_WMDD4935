let mongo = require("mongodb").MongoClient
let url = "mongodb://localhost:27017/learnyoumongo"

mongo.connect(url,function (err, db) {
    db.collection('parrots').find({
        age:{$gt: +process.argv[2]}
    },{
    	name: 1,
		age: 1,
		_id: 0
    }).toArray(function (err,document) {
        console.log(document)
        db.close();
    })
})