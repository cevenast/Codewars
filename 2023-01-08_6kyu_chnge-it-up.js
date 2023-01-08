/*Create a function that takes a string as a parameter and does the following, in this order:

    Replaces every letter with the letter following it in the alphabet (see note below)
    Makes any vowels capital
    Makes any consonants lower case

Note:

    the alphabet should wrap around, so Z becomes A
    in this kata, y isn't considered as a vowel.

So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

*/

// Answer

function changer(str) {
    str = str.toLowerCase()
    let newStr = ''
    const vowels = 'aeiou'
    const consonants = 'bcdfghjklmnpqrstvwxyz'
    const alphabet = 'abcdefghijklmnopqrstuvwxyza'
    let newChar
    for (let char of str){
      if (alphabet.includes(char)){
        newChar = (alphabet[alphabet.indexOf(char)+1])
        if (vowels.includes(newChar)){
          newStr = newStr.concat(newChar.toUpperCase())
        }
        else{
          newStr = newStr.concat(newChar.toLowerCase())               
        }
      }
      else{
        newStr = newStr.concat(char)
      }
    }
    
    return newStr
  }