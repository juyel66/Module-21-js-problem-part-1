function oddAverage(numbers){
    const odds= [];
    for ( const number of numbers){
        if ( number%2===1){
            console.log(number);
            odds.push(number)
        }
    }
   let sum= 0;
   for (  const number of odds){
     sum= sum+number;
   }
   const count= odds.length;
   console.log( 'sumatoin and length is:', count, sum);
   const AVG = sum/count;
   return AVG

   



}
const numbers=[12,34,23,12,23,12,435,32,12,121,53];
const avg = oddAverage(numbers);
console.log(avg);







