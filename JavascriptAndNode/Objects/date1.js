let date=new Date();
console.log(date);
//let date1=new date(2018,11,24);
//console.log(date1);
//let date2=new date(2018,10,13,10,33);
//console.log(date2);
console.log('Year' +date.getFullYear());

console.log('Month' +date.getMonth());
console.log('Date' +date.getDate());

console.log('Day' +date.getDay());
console.log('Date&TIme: '+date.toLocaleString());
console.log('FullDate: '+date.toLocaleDateString());
let date2=new Date('2015-03-23');
console.log(date2.toLocaleDateString());

