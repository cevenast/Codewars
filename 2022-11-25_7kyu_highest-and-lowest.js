/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Notes 
    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.
*/

// P: A string of numbers separated by spaces, or only one number with no spaces
// R: String of two numbers separated by a space, with the highest and lowest numbers of the original string
// E: highAndLow("1 2 3 4 5")  --> return "5 1"
//    highAndLow("1 2 -3 4 5") --> return "5 -3"
//    highAndLow("1 9 3 4 -5") --> return "9 -5"

// Answer

function highAndLow(numbers){
    // Create an array from the string
    let arr = numbers.split(' ')
    // Use Math.max and Math.min to get the highest and lowest
    let max = arr.reduce((a, b) => Math.max(a, b))
    let min = arr.reduce((a, b) => Math.min(a, b))
    // Return them as a string
    return `${max} ${min}`
  }