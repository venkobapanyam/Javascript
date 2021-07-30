var promise=new Promise(function(resolve,reject)
{
    const x='Hello';
    const y='Hello';
    if(x==y)
    {
        resolve();
    }
    else{
        reject();
    }
}
);
promise.then()