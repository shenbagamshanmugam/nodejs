// console.log("hello world!");

const http = require("http");
const mydate = require('./dateModule.ts');
const url = require('url');

http.createServer((request,response)=>{
    response.writeHead(200,{'content-Type':'text/plain'});
    response.write(`Current Date is : ${mydate.myDate()}` + '\n');

    // Read the query string
    response.write(request.url+'\n');

    // Split the query string
    const split = url.parse(request.url,true).query;
    const text = split.name + " " + split.age + "\n";
    response.write(text);

    response.end("Executed Successfully!!!");
}).listen(1600);

console.log("Server Running...");