/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.*/


// Answer

function positiveSum(arr) {
    let result = arr.filter(num => num > 0).reduce((ini, num) => ini + num,0)
    return result
 }

