//Callback function
function square(n){
    console.log("Square Called")
    return n*n;
}
function cube(n){
    return n*n*n;
}

function sumOfSomething(a,b,fn){
    let square1 =fn(a);
    let square2=fn(b);
    return square1+square2;
}

let ans=sumOfSomething(1,2,square);                     //function calling another function  as an argument
console.log(ans);