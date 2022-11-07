// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.


function findUniq(arr) {
    let equalNumber          // Stores the repeated number of the array
    let differentNumber      // Stores the different number of the array

     // If the first two numbers are equal, that's the repeated number. 
     // Otherwise, one of those is the different one, and the second one must be repeated
    arr[0] == arr[1] ? equalNumber = arr[0] : equalNumber = arr[2]

    // Iterates through the array until it finds the different number
    let index = 0
    while (differentNumber == undefined){
      arr[index] != equalNumber ? differentNumber = arr[index] : index += 1
    }
     return differentNumber
   }