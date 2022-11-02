/*You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!*/


//Answer

function expandedForm(num) {
    let digitsList = String(num).split('')
    let expandedList = digitsList.map((digit, index) => digit + '0'.repeat(digitsList.length-1-index))
    return expandedList.filter(number => Number(number) != 0).join(' + ')
  }