//Simple function
function Hello()
{
    console.log('Hello world..')
}
Hello();
//function with single parameter
function greet(name)
{
    console.log(name);
}
greet('venky');
greet('raj');

//function with parameters
function Add(a,b)
{
    let result=a+b;
    console.log(`Adding of two numbers:${a}+${b}=${result}`);
}
Add(10,20);
//Default value/parameter
function sum(a,b=10) //default value
{
    let result=a+b;
    console.log(`Adding of two numbers:${a}+${b}=${result}`);   
}
sum(12);
sum(10,20);