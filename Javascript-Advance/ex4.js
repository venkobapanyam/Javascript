//Asyn Js using predefined methods-setTimeout
function f()
{
    console.log("Hello callback..");
}
setTimeout(f,3000);
//callback fun as  a arrow function
setTimeout(()=>{
    console.log("venky hello");
},3000);