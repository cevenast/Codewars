/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"*/

// Answer

function reverseWords(str) {
    let arr = str.split(' ')
    let arrReversed = arr.map(word => word.split('').reverse().join(''))
    return arrReversed.join(' ')
  }