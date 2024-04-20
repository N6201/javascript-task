const initialArray = [1,2,3];

//for (let i = 0; i < initialArray.length; i++){
//console.log(initialArray[i]);
//}

function logThing(str){
    console.log(str);
}

//[1,2,3]
initialArray.forEach(logThing)

logThing(1)
logThing(2)
logThing(3)