function findsum(n){

    let ans=0;
    for(let i=1; i<n; i++) {
        ans=ans+i;
    } 
    return ans;
}
function findSumTill100(){
    console.log(findSumTill(100));
}
//busy waiting
function syncSleep(){
      let a=1;
      for(let i=0; i<100000000; i++) {
        a++;
    }

}
syncSleep();
//findSumTill100();
setTimeout(findSumTill100,1000);
console.log("hello world");
