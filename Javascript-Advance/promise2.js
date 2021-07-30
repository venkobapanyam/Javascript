var promise=new Promise((resolve,reject)=>{
    let result=false;
    if(result)
    {
        resolve('Hello Guys');
    }
    else{
        reject("Hardluck..");
    }
});
promise.then((successmsg)=>
console.log(successmsg),(errormsg)=>console.log(errormsg)
)