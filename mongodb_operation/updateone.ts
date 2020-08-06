const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://learnmongo:password@localhost:27017/users',(err,db)=>{
    if(err) throw err;
    const dbobj = db.db('learnmongo');
    const selectdata = {name:'shenba'};
    const updatedata = {$set:{name:'shenbagam'}};
    dbobj.collection('Users').updateOne(selectdata,updatedata,(err,result)=>{
        if(err) throw err;
        console.log("updated successfully");
        db.close();
    });
});