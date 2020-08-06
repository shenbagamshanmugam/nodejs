const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    const dbobj = db.db('learnmongo');
    const deletequery = {name:/^s/};
    dbobj.collection('users').deleteMany(deletequery,(err,result)=>{
        if(err) throw err;
        console.log("deleted the selected documents");
        console.log(result.result.n);
        db.close();
    })
})