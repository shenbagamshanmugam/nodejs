const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    const dbobj = db.db('learnmongo');
    dbobj.collection('users').find().limit(3).toArray((err,result)=>{
        if(err) throw err;
        console.log(result);
        db.close();
    });
});