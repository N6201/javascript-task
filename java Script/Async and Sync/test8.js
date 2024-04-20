function naliniAsyncFunction(){
    let p=new Promise(function(resolve){                 //Capital P is necessary
      //do some async logic there
      resolve("hi there")
    });
    return p;
}
async function main(){
   let value= naliniAsyncFunction()
   console.log(value);
} 

main();