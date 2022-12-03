/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

*/

// P: Always a positive integer.
// R: An positive integer representing the number of times an operation was done.
// E: 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
//    999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//    4 --> 0 (because 4 is already a one-digit number)

// Answer

function persistence(num) {
    let str = String(num) // Convert to string so we can count the digits and split them
    let counter = 0 // Stores the number of times the operations has been executed
    while (str.length > 1){ // Checks the number of digits of the number
      counter += 1
      str = String(str.split('').reduce((ini, num) => ini * Number(num),1)) //Separates the digits and multiplies them. The result is given as a string. 
    }
    return counter
 }
