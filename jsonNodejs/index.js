const fs = require("fs");

const { fileURLToPath } = require("url");

const bioData = {
    name : "Smitali",
    age : 21
};

// console.log(bioData.name);

// //to covert object into json data
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// //to convert json data into object data
// const objData = JSON.parse(jsonData);
// console.log(objData);

// 1.convert to JSON
// 2.Add into another file
// 3.Read that file
// 4.Again convert it into object 
// 5.Print it on the console

const jsonData = JSON.stringify(bioData);
console.log(jsonData);

fs.writeFile("json1.json",jsonData , (err)=>{
    console.log("Done!!");
});

fs.readFile("json1.json","utf-8",(err,data)=>{
    const objData = JSON.parse(data);
    console.log(data);
    console.log(objData);  
});

