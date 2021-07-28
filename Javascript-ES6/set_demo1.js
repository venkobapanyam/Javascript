const numbers=new Set([10,20,30,40,50,60]);
numbers.add(70);
numbers.add(99);
console.log(numbers.size);
numbers.delete(99); //remove value from set
numbers.clear(); //clear all values from set
//return all values
for(let k of numbers.values())
{
    console.log(k);
}