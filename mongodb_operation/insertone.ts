const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017',(err,db)=>{
    if(err) throw err;
    const dbobj = db.db('learnmongo');
    const userlist = {userid:1,name:"shenba"};
    dbobj.collection("users").insertOne(userlist,(err,res)=>{
        if(err) throw err;
        console.log("Data Inserted");
        db.close();
    });
});