const fs=require("fs");
//console.log("hello");
fs.readFile("./f.txt",getdata);
function getdata(error,data)
{
    console.log(data+"");
}
//console.log("end");
fs.readFile("./f1.txt",get1data);
function get1data(error,data)
{
    console.log(data+"");
}
fs.readFile("./f2.txt",get2data);
function get2data(error,data)
{
    console.log(data+"");
}