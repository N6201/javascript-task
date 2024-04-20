function promisifedTimeout(duration){
    const p= new Promise(function(resolve) {                             //Uppercase P in Promise
             setTimeout(resolve,duration);
    })
    return p;
}
 //promise chaining
 //async  wait
promisifedTimeout(1000).then(function(){
   console.log("first is done");
promisifedTimeout(2000).then(function(){
        console.log("second is done")
    });
})