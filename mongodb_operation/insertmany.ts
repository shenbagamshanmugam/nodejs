const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017",(err,db)=>{
    if(err) throw err;
    const dbobj = db.db("learnmongo");
    const userlistArr = [
        {userid:1,name:"shenba"},
        {userid:2,name:"sudar"},
        {userid:3,name:"baby"},
        {userid:4,name:"shanmugam"}
    ];
    dbobj.collection("users").insertMany(userlistArr,(err,res)=>{
        if(err) throw err;
        console.log("Inserted Many items");
        db.close();
    })
})