function print(){
    console.log("Hello World");
}
for(let i=0;i<31;i++){
    setTimeout(print,2000*i);
}
