const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    const dbobj = db.db('learnmongo');
    dbobj.collection('users').find({}).toArray((err,res)=>{
        if(err) throw err;
        console.log(res);
        db.close();
    })
})