const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3001;
const userPanel = require('./userPanel');

app.use(bodyParser.urlencoded())

// app.post('/user',(req,res)=>{
//     // res.send({name:"shenba"})
//     arr = "shenbagam"
//     res.status(200).json(arr);
// })


app.post('/user',userPanel.getUserList);

app.listen(port,()=> console.log(`Server is running on port ${port}`));