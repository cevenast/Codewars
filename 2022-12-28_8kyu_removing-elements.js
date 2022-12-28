/*Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!*/

// P: A non-empty array
// R: An array, with only the elements of the original array in even index positions.
// E: [0,1,2,3,4] -> [0,2,4]

// Answer

function removeEveryOther(arr){
    return arr.filter((element, index) => index % 2 == 0)
  }