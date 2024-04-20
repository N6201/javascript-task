const fs = require('fs');

//raw async fuction
function putCopyrightToFile(cb){
    fs.readFile("a.txt","utf-8",function(err,data){
        data=data+"copyright 2024 nalini ";
        fs.writeFile("a.txt","utf-8",function () {

        cb();
    })
});

}

putCopyrightToFile(function() {
    console.log('copyright has been updated');
});