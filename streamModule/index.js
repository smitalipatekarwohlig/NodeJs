const fs = require("fs");
const http = require('http');
const { Stream } = require("stream");

const server = http.createServer();

server.on("request",(req,res)=>{
   
//     fs.readFile('input.txt',(err,data)=>{
//         if(err) return console.log(err);
        //   res.end(data.toString());
//     });
// const rstream = fs.createReadStream("input.txt");

// rstream.on("data",(chunkdata)=>{
//     res.write(chunkdata);
// });
// rstream.on("end",()=>{
//     res.end();
// });
// rstream.on("error",(err)=>{
//     console.log(err);
//     res.end("File not found");
// });

// });

// 2nd Way 
// Reading from a Stream
// Create a readable Stream
// Handle stream events --> data,end and error



//3rd way

const rstream = fs.createReadStream("input.txt");
  rstream.pipe(res);//it is used to take readable data and connect it to writable data
});

server.listen(8000, "127.0.0.1");