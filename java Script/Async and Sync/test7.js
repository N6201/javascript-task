//syntax of async
function naliniAsyncFunction(){
    let p=new Promise(function(resolve){                 //Capital P is necessary
      //do some async logic there
      resolve("hi there")
    });
    return p;
}
function main(){
    naliniAsyncFunction().then(function(value){
        console.log(value);

    });
}
main();