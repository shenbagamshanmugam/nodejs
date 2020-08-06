const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/learning";
MongoClient.connect('mongodb://localhost:27017',function(err,mydb){
    if(err) throw err;
    const dbobj = mydb.db("learnmongo");
    dbobj.createCollection("users",(err,mydb)=>{
        if(err) throw err;
        console.log("Collection Created");        
    });
});