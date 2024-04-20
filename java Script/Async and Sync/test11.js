fs.readFile('a.txt', 'utf-8', function(err, data) {

});
fs.readFile('a.txt', 'utf-8').then(function( data) {

})
.catch(function(err) {});


const ans=promisifiedMyOwnSetTimeout(1000);
ans.then(function() {
    console.log("timeout is done");
});
