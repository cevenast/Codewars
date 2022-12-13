/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

// P: A string of words, always lowercase
// R: A string. The word in the original string with the highest score, with the score of each word being its position in the alphabet.
// E: 'man i need a taxi up to ubud' -> 'taxi')
//    'what time are we climbing up the volcano'), 'volcano')

// Answer

function high(words){
    let arr = words.split(' ')
    let wordsScore = {}
    // Iterate through the array to get the score of each word
    arr.forEach(word => {
      let score = 0
      for (let i = 0; i < word.length; i++){ // Iterates through every letter of the word
        score += word[i].charCodeAt()-96 // Takes the letter position in the alphabet
      }
      wordsScore[word] = score // Stores the word and score in the wordsScore object
    })
    
    let values = Object.values(wordsScore)
    let max = Math.max(...values)
    let position = values.indexOf(max)
    return Object.keys(wordsScore)[position]
  
  }