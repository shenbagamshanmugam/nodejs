const MongoClient = require('mongodb').MongoClient;
const urllink = 'mongodb://localhost:27017';

MongoClient.connect(urllink,(err,db)=>{
    if(err) throw err;
    const dbobj = db.db('learnmongo');
    const selectedData = {name:'shenbagam'};
    const updateData = {{age:'23'}};
    dbobj.collection('users').updateOne(selectedData,updateData,(err,result)=>{
        if(err) throw err;
        console.log("Updated successfully");
        db.close();
    });
});