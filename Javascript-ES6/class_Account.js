class Account{
    constructor(accountnum,name,accounttype,amount,minbalance)
    {
        this.AccountNum=accountnum;
        this.Name=name;
        this.AccountType=accounttype;
        this.Amount=amount;
        this.MinBalance=minbalance;
    }
    details()
    {
       // return ("AccountNum:" +this.AccountNum +"Name:"+this.Name +"AccountType:"+this.AccountType +"Amount:"+this.Amount +"MinBalance:"+this.MinBalance);
        return "Hello";
    }
}

class transaction extends Account{
  
    display(){
        super.details();
        }
  
}

let accounts=[];
function fun1(){
let obj = new transaction(54145115,"venky", "savings",150000,71000);
let data=obj.display();
accounts.push(obj);
}
fun1();
console.log([...accounts]);

