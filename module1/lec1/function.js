function fun()
{
    console.log("function says hi");
}
fun();
let yahoo=function()
{
    console.log("fifa 22 is the best");
}
yahoo();

function getfirstname(fullname)
{
    fullname=fullname.split(" ");
    return fullname[0];
}
function getlastname(fullname)
{
    fullname=fullname.split(" ");
    return fullname[1];
}

function funn(fullname,cb)
{
    let name=cb(fullname);
    console.log(name);
}
funn("steve rogers",getfirstname);
funn("iron man",getlastname);
