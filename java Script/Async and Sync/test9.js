function naliniAsyncFunction(){
    let p=new Promise(function(resolve){                 //Capital P is necessary
      //do some async logic there
      setTimeout(function(){
        resolve("hi there")
      }, 1000);
    });
    return p;
}
async function main(){
    //no callback,no.then syntax
    
   let value= naliniAsyncFunction()
   console.log(value);
} 

main();