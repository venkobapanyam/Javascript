let numbers=[12,13,15,16,20];
numbers.push(30);//add number at last
numbers.unshift(10); //add number at first

for(k of numbers)
{
    console.log(k);
}
numbers.pop(20) ; //remove number from last
numbers.shift(10); //remove number from first
//splice
let arr1=[23,45,56,76,78,32,12]
console.log(arr1);
arr1.splice(0,2);//removed 2 items from 0th index
arr1.splice(0,2,200,100);//removed first 2 items and replaced with 200,100
console.log(arr1);
//slice