const fs=require("fs");
console.log("hello");
fs.readFile("./f.txt",getdata);
function getdata(error,data)
{
    console.log(data+"");
}
console.log("end");


