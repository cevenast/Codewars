/*Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
Input may be any positive or negative integer (including 0).
You can assume that all inputs are valid integers.
*/

// P: Always an integer, zero, positive or negative
// R: An integer, rounded up to the next multiple of 5. If the number is already a multiple of 5, return that number.
// E: 0   ->  0
//    4   ->  5
//   -19  -> -15
//    30  ->  30


function roundToNext5(n){
    while (n % 5 != 0){ // If n is not a multiple of 5, add 1 until it is
      n++
    }
    return n
  }