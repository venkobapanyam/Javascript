class Person
{
    constructor() //default constructor
    {
        this.Pid=1;
        this.Pname='Ram';
        this.City='Bangalore'
    }
}
let person=new Person();
let person1=new Person();
console.log(person.Pid+" "+person.Pname+" "+person.City);
class student
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
       
    }
    display()
    {
console.log(this.name);
console.log(this.age);
console.log(this.city);
    }
}
var obj=new student('sachin',12)
obj.display()
var obj1=new student('Ram');
obj1.display();
var obj2=new student('sachin',12,'Delhi')
obj2.display()