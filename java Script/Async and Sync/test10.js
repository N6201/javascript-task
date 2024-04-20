function naliniAsyncFunction(){
    let p=new Promise(function(resolve){                 //Capital P is necessary
      //do some async logic there
      setTimeout(function(){
        resolve("hi there")
      }, 1000);
    });
    return p;
}
async function main(){                                             //await only use in async functions
    //no callback,no.then syntax
    
   let value=await naliniAsyncFunction()                          //stuck and wait then type
   console.log("hi there1");
} 

main();
console.log("after main");