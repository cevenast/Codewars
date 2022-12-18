/*Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

// P: An array with any kind of data
// R: The same array, but with all the 0s pushed to the end. Only the number 0 must be moved.
// E: [1,2,0,1,0,1,0,3,0,1]             => [1,2,1,1,3,1,0,0,0,0]
//    [false, 0, [0,0,0],[0],'0',1,2,3] => [false, [0,0,0],[0], '0', 1,2,3,0]

// Answer

function moveZeros(arr) {
    let zeros = [] // Zeros in the array will be  pushed to zeros
    let newArr = [] // Every element that is not a zero will be pushed to newArr
    
    arr.forEach(element => {
      element !== 0 ? newArr.push(element) : zeros.push(element)
    })
    
    return newArr.concat(zeros) // Concatenate newArr with zeros, leaving all the 0s at the end.
}