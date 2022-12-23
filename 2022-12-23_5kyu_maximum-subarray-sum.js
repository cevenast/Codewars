/*The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:



Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.*/

//P: An array of numbers. Can also be an empty array.
//R: The maximum sum of a subarray of the numbers. If the array is empty, or all the numbers are negative, return 0.
//E: [-2, 1, -3, 4, -1, 2, 1, -5, 4]) -> 6  (because the sum of [4, -1, 2, 1], being the maximum subarray sum) 
//   [] -> 0
//   [-3,-7,-4,-82] -> 0
 

const maxSequence = function(arr){
  // Check if array is empty
  if (arr.length == 0){
    return 0
  }
  
  // Check if every element is negative and return 0
  const negative = arr.filter(num => num >= 0)
  if (negative.length == 0){
    return 0
  }
  
  let currentLength = 1
  let currentMax = arr.reduce((ini,num) => ini+num, 0)
  let slice
    
  // Loop through the array, slicing "currentLength" numbers
  while (currentLength < arr.length){
    for (let i = 0; i + currentLength <= arr.length; i++ ){
      slice = arr.slice(i,i+currentLength).reduce((ini,num) => ini+num,0)
      console.log(slice)
      // Storing the max result and compare each time
      if (slice > currentMax){
        currentMax = slice
      }
    }
    // Continue adding one to currentLength
    currentLength += 1
  }
  return currentMax
}