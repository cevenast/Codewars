/*ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/
// P: Always a string. 
// R: A string with the string ciphered, changing every letter for the one 13 letters after it, considering case differences.
// E: e --> r, s --> f, T --> G  

// Answer

function rot13(message){
    // Create lowercase alphabet
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    alphabet = alphabet.concat(alphabet.slice(0,13)) // Repeat the first 13 to allow last letters return to the start
    // Create uppercase alphabet
    const alphaUpper = alphabet.map(letter => letter.toUpperCase()) // Uppercase Alphabet
    // Declare the ciphered string to be filled
    let ciphered = ''

    for (let i = 0; i < message.length; i++){
      if (alphaUpper.includes(message[i])){ // Looks for the letter in the Uppercase Alphabet
        ciphered += alphaUpper[alphaUpper.indexOf(message[i])+13] // 
      }
      else if (alphabet.includes(message[i])){ // Looks for the letter in the Lowercase Alphabet
        ciphered += alphabet[alphabet.indexOf(message[i])+13]
      }
      else{ // If character is not a letter, return the character
        ciphered += message[i]
      }
    }
    
    return ciphered
}