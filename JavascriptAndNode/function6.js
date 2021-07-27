//Arrow Function
//let fun=(arg1,arg2....)=>{expression}

let Hello=()=>
    "Hello world"
    let result=Hello();
    console.log(result);

    let greet=(n)=>{
        let message="good morning!"+n;
        return message;
    }
    console.log(greet('venky'));
    console.log(greet('ram'));

    let sum=(a,b)=>a+b;
    console.log(sum(2,5));

    let age=18;
    let message=age>=18?()=>'You can vote':()=>'Try next time'
    console.log(message());
    function f(f1,f2)
    {
        return f1()+" "+f2();

    }
    result=f(()=>'hello', ()=>'Tina')
    console.log(result);