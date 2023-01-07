/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

Strings */

function spinWords(string){
    let words = string.split(' ')
    let newArr = words.map(word => {
      if (word.length >= 5){
        let reversed = ''
        for (let i = word.length-1; i >= 0; i+=-1){
          reversed = reversed.concat(word[i])
        }
        return reversed
        }
      else{
        return word
      }
      }
    )
    return newArr.join(' ')
  }