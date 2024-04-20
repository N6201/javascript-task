function sum(num1,num2){
    let result=num1+num2;
    return result;
}
function displayResult(data) {
    console.log("Result of sum:" +data);
}
function displayResultPassive(data) {
    console.log("Sum's result is:" +data);
}
//you allowed to call one function after this
//how displayResult of sum
const ans=sum(6,5);
displayResult(ans);