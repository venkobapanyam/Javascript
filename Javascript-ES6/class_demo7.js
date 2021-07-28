class student{
    constructor(sid,sname,age,city){
        this.sid=sid;
        this.sname=sname;
        this.age=age;
        this.city=city;
    }
    show(){
        console.log(`ID:${this.sid} Name:${this.sname} Age:${this.age} city:${this.city}`)

    }
}
//array of students
let students=[
    new student(12,'rohan',12, 'chennai'),
    
    new student(14,'rohan',12, 'banglore'),
    
    new student(15,'rohan',12, 'mumbai'),
    
    new student(16,'rohan',12, 'Hyd'),
    
    new student(19,'rohan',12, 'pune')
]
for(stu of students)
{
    stu.show();//method defined in student class
}