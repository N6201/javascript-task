//CLEAN WAY
const fs = require('fs');
//my own asynchronous function
function naliniReadFile() {
    console.log("inside nalinReadFile");
    var p= new Promise(function(resolve) {           //var= keyword which declaring the new variable
        console.log("inside Promise");
    fs.readFile("a.txt","utf-8",function(err,data){
        resolve(data);
});
});
return p;   //return then pending delete from output
}

//callback function to call
function onDone(data){
    console.log(data)
}   
var a =naliniReadFile();
console.log(a);
a.then(onDone);
naliniReadFile().then(onDone);

