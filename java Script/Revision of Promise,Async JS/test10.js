//promisify this async function
//returned undefined
function myOwnSetTimeout(callback,duration){
   setTimeout(callback,duration);
}

//returning a promise
function promisifiedMySetTimeout(duration){
 const p = new Promise();
 return p;

}


myOwnSetTimeout(function() {
    console.log("hello");
},1000)