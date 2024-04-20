function greet(){
    console.log("hello world");
}
function greetAlien(){
    console.log("hello alien");
}
  setTimeout(greetAlien,3*1000)
  setTimeout(greet,3*100)
  setInterval(greet,3*100)