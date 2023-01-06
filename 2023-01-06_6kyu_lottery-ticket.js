/*Time to win the lottery!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.*/

// P: First parameter is always an array of arrays, with the first element of the array being a string of uppercase letters, and the second one a number. 
//    The second parameter is a number
// R: A string: 'Winner!' or 'Loser!'. "Miniwins" must be counted. You have a miniwin if the ANSI code of any of the characters in the array equals the associated number.
//    Then, if the number of miniwins is equal or greater that the win number, you have won.
// E:  ([['ABC', 65], ['HGR', 74 ], ['BYHT', 74]], 2) -> 'Loser'! A is 65, only 1 miniwin, different from 2
//      [['ABC', 65], ['HGR', 74 ], ['BYHT', 74]], 1), 'Winner!'

function bingo(ticket, win){
    let miniwins = 0
    // Check if there's a miniwin on every combination
    ticket.forEach(combination =>{
      for (let i = 0; i < combination[0].length; i++){ //Loop through the string and compare
        if (combination[0].charCodeAt(i) == combination[1]){
          miniwins += 1
          i = combination[0].length
        }
      }
    })
    return miniwins >= win ? 'Winner!' : 'Loser!'
  }