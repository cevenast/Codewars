/*Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8*/


// Answer

function rowSumOddNumbers(row) {
    let numArray = []
    let newArray
    let num = 1
    let index
    for (let rowCounter = 1; rowCounter <= row; rowCounter++){ // Iterates each row
      newArray = []              // 
      index = 0                  // 
      while (index < rowCounter){
        newArray.push(num)
        num += 2                 // Iterates odd numbers and adds to newArray
        index += 1
        }
      numArray.push(newArray)   // Adds new array (each row) to numArray
      }
    return numArray[row-1].reduce((sum,num) => sum += num,0)  //Adds each number of the last row
    }