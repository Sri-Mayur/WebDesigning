let time = new Date();

console.log(time);

let date = new Date(2023, 0, 26);

console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMilliseconds());
console.log(date.getSeconds());

date.setDate(26);
date.setMonth(1);
date.setYear(2005);

console.log(date);