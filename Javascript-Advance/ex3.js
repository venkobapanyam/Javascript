//Callback function

function Display(n)
{
    console.log(n);
}
function calculator(n1,n2,callback)
{
    let sum=n1+n2;
    callback(sum);
}
calculator(4,5,Display);