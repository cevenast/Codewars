/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
*/

// P: An odd-length list of numbers, with all numbers equal except for one
// R: The different number of the array
// E: [1, 1, 2] ==> 2
// E: [17, 17, 3, 17, 17, 17, 17] ==> 3

// Answer

function stray(numbers) {
    let usualNumber
    if (numbers[0] != numbers[1] && numbers[1] == numbers[2]){
        return numbers[0]
        }
    for (let i=1; i < numbers.length; i++){
      if (numbers[i] != numbers[i-1]){
        return numbers[i]
      }
    }
  }