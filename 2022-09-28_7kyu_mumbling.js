/*This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/


// Answer

function accum(s) {
    s = s.toLowerCase()
      let str = ''
    for (let i = 0; i < s.length; i++){
      str += s[i].repeat(i+1) + '-'
    }
    let arr = str.split('-')
    arr.pop()
    arr = arr.map(term => term[0].toUpperCase() + term.slice(1,term.length))
    return arr.join('-')
  }