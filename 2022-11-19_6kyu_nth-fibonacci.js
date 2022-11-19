/*I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2

Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.*/

// Answer

function nthFibo(n) {
    if (n == 1){
      return 0
    }
    if (n == 2){
      return 1
    }
    let currentNumbers = [0,1]
    let newNumber
    for (let i = 3; i <= n; i++){
      newNumber = currentNumbers[0] + currentNumbers[1]
      currentNumbers[0] = currentNumbers[1]
      currentNumbers[1] = newNumber
    }
    return newNumber
  }