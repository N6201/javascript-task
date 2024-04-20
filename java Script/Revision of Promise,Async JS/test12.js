console.log("at top 1")
function promisifiedTimeout(){
    console.log("function called 3")
    return new Promise(function(resolve){                                       //1.downloading -2.sent to some server api -3.after that downloading start
        console.log("inside promise called 4")
        setTimeout(function(){
            console.log("setTimeout called 5")
            resolve("hi there");
        },1000);
    });
}

console.log("in middle 2")
promisifiedTimeout().then(function(value){
    console.log("promisified then 6")

    console.log(value);
});