const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    const dbobj = db.db('learnmongo');
    dbobj.collection('users').findOne({},(err,res)=>{
        if(err) throw err;
        console.log("The findOnd result is"+res.name);
        db.close();
    });
});
