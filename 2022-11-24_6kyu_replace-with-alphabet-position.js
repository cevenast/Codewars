/*In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )*/

// P: It's always going to be a string
// R: A string of numbers separated by spaces, changing every letter with its position in the alphabet. If it's not a letter, remove it from the string.
// E: 'Hello World' --> "8 5 12 12 15 23 15 18 12 4" 


// Answer

function alphabetPosition(text) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    // Make sure it's a letter
    text = text.toLowerCase()
    let arr = text.split('').filter(char => alphabet.includes(char))
    
    // Change every letter to its position in the alphabet
    return arr.map(letter => alphabet.indexOf(letter)+1).join(' ')
  }