class Employee
{
    constructor(eid,ename,desig,sal)
    {
        this.Eid=eid;
        this.Ename=ename;
        this.Desig=desig;
        this.Salary=sal;
    }
}

class Manager extends Employee
{
    constructor(eid,ename,desig,sal,project)
    {
        super(eid,ename,desig,sal);
        this.Project=project;
    }
    details()
    {
        console.log("EId"+this.Eid);
        console.log("EName"+this.Ename);       
        console.log("ESalary"+this.Salary);        
        console.log("Edesignation"+this.EDesig);
        console.log("Eproject"+this.project);
    }
}