class Student{
    //constructor of the class
    constructor(name,age)
    {
        //"this" points to the current object
        this.name=name;
        this.age=age;
    }
    //member function
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    //getters and setters make a function accessible like a 
    set age(value)
    {
        this._age=value;
    }
    get age(){
        return this._age;
    }

}
//instance of student class
var stud=new Student("Narayan", 21)
stud.age=12; //executes setter