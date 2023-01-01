/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).*/

// P: An array of integers. Only one of those integers will appear an odd number of times.
// R: The number that appears an odd number of times in the array.
// E: [1,2,3,4,5,1,2,4,5] --> 3

function findOdd(A) {
    let numbers = {}
    for (let i = 0; i < A.length; i++){
      numbers[A[i]] = numbers[A[i]] + 1 || 1
    }
    for (const num in numbers){
      if (numbers[num] % 2 != 0){
        return  Number(num)
      }
    }
  }