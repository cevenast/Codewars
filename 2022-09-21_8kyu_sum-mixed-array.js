/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

// Answer

function sumMix(x){
    return x.reduce((ini,num) => ini + Number(num),0)
  }

