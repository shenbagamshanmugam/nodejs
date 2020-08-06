const MongoClient = require('mongodb').MongoClient;
const url ="mongodb://localhost:27017";

MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    const dbobj = db.db('learnmongo');
    const deletequery = {name:'baby'};
    dbobj.collection('users').deleteOne(deletequery,(err,result)=>{
        if(err) throw err;
        console.log("deleted the selected records");
        console.log(result.result.n);
    })
})