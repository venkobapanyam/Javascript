class Person{
    constructor(name){
        this.Name=name;
    }
    details()
    {
        console.log("Name" +this.Name)
    }
}
class Employee extends Person{
    constructor(name,title){
        super(name); //call the person constructor
        this.title=title;
    }
    details()
    {
        super.details();//calls person detail()
        console.log("Title:" +this.title);
    }
}
let obj = new Employee("Rohan", "Teamleader");
obj.details()