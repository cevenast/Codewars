/*Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9

For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]*/

// P: Always a positive integer
// R: An array of arrays, where every array is the multiplication series of each number
// E: multiplicationTable(1) = [[1]]
//    multiplicationTable(2) = [[1,2],[2,4]]
//    multiplicationTable(3) = [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    let table = [] // table will store every array
    let first = [] 
    // first will store the 1* multiplication series until the given number
    for (let i = 1; i <= size; i++){
      first.push(i)
    }
    table.push(first) //first gets stored as the first row in the table
    let newRow 
    // newRow will be a multiplication of the first row with a new number on each interation
    // and will be stored in the table 
    for (let i =2 ; i <= size ; i++){
      newRow = first.map(num => num*i)
      table.push(newRow)
    }
    return table
  }