let mongo = require("mongodb").MongoClient
let url = "mongodb://localhost:27017/learnyoumongo"

var document = {
    firstName : process.argv[2],
    lastName : process.argv[3]
}
mongo.connect(url,function (err, db) {
    let docs_collection = db.collection('docs')
    docs_collection.insert(document,function (err,data) {
        if (err) throw err
        
        console.log(JSON.stringify(document))
        db.close();
    })
})