const fs=require("fs");

let pendingpromise=fs.promises.readFile("./f2.txt");
console.log(pendingpromise);

pendingpromise.then(function(data)
{
    console.log("inside scb");//successful call back
    console.log(data+"");
});

pendingpromise.catch(function(error)
{
    console.log("inside fcb");//failure call back
    console.log(error);
});