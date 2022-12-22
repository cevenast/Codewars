/*Task

Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes: Only positive integers will be passed to the function (> 0 ), no negatives or zeros. */

// P: An array of numbers
// R: A number. The smallest number that can be formed with the numbers of the array, without repeating the same digit.
// E: [1, 3, 1] -> 13
//    [5, 7, 9, 5, 7] -> 579
//    [1, 9, 1, 3, 7, 4, 6, 6, 7] -> 134679


function minValue(values){
    let digits = '' //Will store the digits
    for (let i = 1; i < 10; i++){ // Look for different numbers
      values.forEach(num => { // Compare the digits in the array with the digit, and if it is already in  
        if (num == i && !digits.includes(num)){
          digits += String(num)
           values = values.filter(num => num != i) //filters the array, so it doesn't iterate through smaller numbers in the next iteration
        }
      })
    }
    return Number(digits)
  }