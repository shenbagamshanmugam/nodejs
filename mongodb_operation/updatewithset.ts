const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    const dbobj = db.db('learnmongo');
    const selectedData = {name:'shenba'};
    const updateData = {$set:{age:'23'}};
    dbobj.collection('users').updateOne(selectedData,updateData,(err,result)=>{
        if(err) throw err;
        console.log("Updated successfully");
        db.close();
    });
});