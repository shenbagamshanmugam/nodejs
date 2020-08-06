const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    const dbobj = db.db('learnmongo');
    const useragedetail = {username:'shenbagam',age:23};
    dbobj.collection('userage').insertOne(useragedetail,(err,res)=>{
        if(err) throw err;
        console.log("Inserted successfully");
    })
    dbobj.collection('userage').aggregate([
        {$lookup:{
            from:'users',
            localField:'name',
            foreignField:'username',
            as:'userdetails'
        }}
    ]).toArray((err,result)=>{
        if(err) throw err;
        console.log(result);
        console.log(JSON.stringify(result));
        db.close();
    });
});