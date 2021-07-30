//clousers

function foo()
{
    var b=1;
    function inner()
    {
        return b;
    }
    return inner;//we can return a function in js
}
var get_inner=foo();
console.log(get_inner());
console.log(get_inner());