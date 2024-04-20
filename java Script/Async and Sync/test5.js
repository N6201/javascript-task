 // pending,resolved,rejecting
 var d =new Promise(function(resolve){
    setTimeout(function(){
    resolve("fsibj");
 },1000)
 });
 function callBack() {
    console.log(d);
 }
 console.log(d);
 d.then(callBack)
