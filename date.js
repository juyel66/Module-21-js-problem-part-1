const date= new Date();
console.log(date);


console.log(date.getMonth());
console.log(date.getDay());


const specificDate= new Date(2090, 0, 12);
console.log(specificDate);
specificDate.setMonth(11);
console.log(specificDate);
console.log(specificDate.toLocaleString('en-GB'));
