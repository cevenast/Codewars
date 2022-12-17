/*Complete the solution so that the function will break up camel casing, using a space between words.*/


// P: Always a string. It can be empty. It can have from none to multiple uppercase letters.
// R: A string with the words separated by a space.
// E: 'camelCastingTest' => 'camel Casing Test'
//    'camel'            => 'camel'
//    ''                 => ''


// Answer

function solution(string) {
  // Create an empty string to be filled with the words
  let newStr = ''
  let currentWordStart = 0
  // Iterate through the original string 
  for (let i = 0; i < string.length; i++){
    if (string[i] == string[i].toUpperCase()){
    // When it finds an uppercase letter, it adds the previous characters to the new string
      newStr += ' ' + string.slice(currentWordStart,i)
      currentWordStart = i
    }
    else if (i == string.length-1){
      newStr += ' ' + string.slice(currentWordStart,i+1)
    }
  }
  return newStr.trim()
    
}