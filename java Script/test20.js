function cutIt (str, startIndex,endIndex) {
    let newStr="";
    for(let i; i < str.length; i++) {   
        if(i>=startIndex && i<=endIndex){
            newStr=newStr+str[i];
        }
    }
    return newStr;
}

const value="Nalini Kant";

let ans2=value.slice(2,5)
console.log(ans2);
console.log(cutIt(value,2,5));