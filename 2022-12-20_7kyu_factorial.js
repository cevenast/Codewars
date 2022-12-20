/*In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).*/

// P: An integer
// R: The factorial of the number if the number is between 0 and 12. If not, throw a RangeError error.
// E: factorial(0) -> 1
//    factorial(1) -> 1
//    factorial(2) -> 2
//    factorial(3) -> 6
//    factorial(13) -> RangeError

function factorial(n){
  // Check if number is in the acceptable range
    if (n < 0 || n > 12){
      throw new RangeError('The number must be between 0 and 12')
    }
    // Calculate factorial
    let factorial = 1
    for (let i = n; i > 1; i -= 1){
      factorial *= i
    }
    return factorial
  }