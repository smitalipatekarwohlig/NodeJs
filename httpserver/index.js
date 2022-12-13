//The http.createServer() method includes request and response parameters which is supplied by Node.js

//The request object can be used to get information about the current HTTP request
// eg.url,request header and data

//The response object can be used to send a response for a current HTTP request

//If the response from the HTTP server is supposed to be displayed as HTML,you should include a HTTP header with the correct type: 

const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    const data =fs.readFile(`${__dirname}/userApi/userapi.json`,"utf-8");
    const objData = JSON.parse(data);

    // console.log(req.url);
    if(req.url == "/"){
        res.end('Hello from the home side');
    }else if(req.url == "/about"){
        res.end('Hello from the AboutUs side');
    }else if(req.url == "/contact"){
        res.end('Hello from the contactUs side');
    }else if(req.url == "/userapi"){
        res.writeHead(200,{"Content-type":"Application/json"});
        res.end(objData[2].name);
    }else{ 
        res.writeHead(404, {"Content-type":"text/html"});//writeHead() sends a response header to the request
        res.end("<h1> 404 error page. Page doesn't exist.</h1>");
    }
});

server.listen(8000,"127.0.0.1",()=>{//server.listen()used to listen the request
    console.log("Listening to the port no 8000");
});