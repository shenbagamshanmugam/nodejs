const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    const dbobj = db.db('learnmongo');
    dbobj.collection('users').find({},{projection:{_id:1,userid:1,name:1}}).toArray((err,result)=>{
        if(err) throw err;
        console.log(result);
        console.log(result[4].name);
        db.close();
    });
});