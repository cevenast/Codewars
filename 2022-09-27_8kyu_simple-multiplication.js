/*This kata is about multiplying a given number by eight if it is an even number and by nine otherwise. */

//Answer

function simpleMultiplication(number) {
    // Check if number is even or odd
    // If number % 2 is zero: number is even
      return number % 2 == 0 ? number * 8 : number * 9
  }
  