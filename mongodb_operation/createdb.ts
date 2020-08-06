const MongoClient = require('mongodb').MongoClient;
// const urllink = "mongodb://localhost/mydb";

MongoClient.connect('mongodb://localhost:27017/learnmongo', { useUnifiedTopology: true }, function(err, mydb) {
  if (err) throw err;  
  console.log("Database created!");  
  mydb.close();
});

