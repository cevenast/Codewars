/*The museum of incredible dull things

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
Task

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]*/

// P : An array of numbers. Can also be an empty string.
// R: An array of numbers, without the first appereance of the minimum number of the original array. An empty string if original is empty.
// E:  [5,3,2,1,4] => [5,3,2,4]
//     [2,2,1,2,1] => [2,2,2,1]
//       [] => []

// Answer

function removeSmallest(numbers) {
    // Finds minimum number of the array
    let min = Math.min(...numbers)
    // Iterates through the aray
    if (numbers.length == 0){
        return numbers
    }
    for (let i = 0; i < numbers.length; i++){
      if (numbers[i] == min){ // If the number is the minimum, creates new array with the left and right side of that number.
        return numbers.slice(0,i).concat(numbers.slice(i+1,numbers.length))
      }
    }
  }