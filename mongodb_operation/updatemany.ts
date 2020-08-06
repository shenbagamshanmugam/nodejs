const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    const dbobj = db.db('learnmongo');
    const selectedquery = {name:/^s/};
    const updatedquery = {$set:{name:'shenba'}};
    dbobj.collection('Users').updateMany(selectedquery,updatedquery,(err,result)=>{
        if(err) throw err;
        console.log("updated successfully");
        console.log(result.result.nModified);
        db.close();
    });
});