//spread operator-just like concatination.
let arr1=[12,23,45];
let arr2=[34,45];
//let arr3=arr1.concat(...arr2); //normal way to use spread operator
let arr3=[...arr1,...arr2] //another way to use spread operator
for(let k of arr3)
console.log(k)