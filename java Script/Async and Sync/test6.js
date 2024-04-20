let p=new Promise(function(resolve){          //Calling Side
    resolve("hi there");
});
p.then(function(){
    console.log(p);                          //Defining Side
})