const fs =require("fs");
//filesystem module

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})
console.log("hi there");
let a=0;
//takes very long; longer the the file read
for(let i=0;i<1000000;i++){
    a++;
}
console.log("hi there 2");