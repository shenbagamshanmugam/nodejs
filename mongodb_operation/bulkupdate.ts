const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

// MongoClient.connect(url,(err,db)=>{
//     if(err) throw err;
//     const dbobj = db.db('learnmongo');
//     const markslist = [
//         {name:"shenba",mark:80},
//         {name:'baby',mark:90},
//         {name:'sudar',mark:86},
//         {name:'shanmugam',mark:78},
//         {name:'raja',mark:57},
//         {name:'ganga',mark:40},
//         {name:'santhosh',mark:68}
//     ]
//     dbobj.collection('marks').insertMany(markslist,(err,result)=>{
//         if(err) throw err;       
//         console.log("success");
//     });
// });


MongoClient.connect(url,{ useUnifiedTopology: true } ,(err,db)=>{
    if(err) throw err;
    // const dbName = db.collection('marks');
    // console.log(db.s.options.dbName);
    const dbobj = db.db('learnmongo');
    const bulk = dbobj.collection("marks").initializeUnorderedBulkOp();
    bulk.find({mark:80}).update({$set:{grade:'B'}});
    bulk.execute();
    // bulk.find({
    //     mark:{$gte: '20', $lt: '50'}
    // }).update({$set:{'grade':'E'}});
    // console.log("updated");
    // bulk.execute();
   

})