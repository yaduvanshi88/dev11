var name="rockstar";
function fun()
{
    var b=20;
    console.log(name);
    function y()
    {
        console.log(b);
    }
    b=100;
    return y;
}
var newfun=fun();
newfun();