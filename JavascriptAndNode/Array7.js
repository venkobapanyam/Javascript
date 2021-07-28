let users=[
    {id:1,name:'Tim',salary:20000},
    {id:2,name:'john',salary:1000},
    {id:3,name:'surya',salary:12000},
    {id:4,name:'Tony',salary:15000},
]
let user=users.find(i=>i.id>2)
if(user!=null)
console.log(user.name);
else
console.log('Invalid Id');
//Filter
//return mutliple values
let arr=users.filter(i=>i.salary>15000)
console.log(arr);