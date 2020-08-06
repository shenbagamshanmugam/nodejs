const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    const dbobj = db.db('learning');
    // dbobj.collection('users').drop((err,queryok)=>{
    //     if(err) throw err;
    //     console.log("successfully dropped");
    //     db.close();
    // });
    dbobj.dropCollection('employees',(err,queryok)=>{
        if(err) throw err;
        console.log("successfully dropped");
    })
});