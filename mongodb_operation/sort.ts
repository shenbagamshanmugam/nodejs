const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    const dbobj = db.db('learnmongo');
    const sort = {name:1}; //ascending
    // const sort = {name:-1}; //descending
    dbobj.collection('users').find().sort(sort).toArray((err,result)=>{
        if(err) throw err;
        console.log("result",result);
        db.close();
    });
});