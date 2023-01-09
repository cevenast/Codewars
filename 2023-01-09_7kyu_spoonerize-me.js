/*In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

"not picking" --> "pot nicking"

Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example. A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. Though spoonerisms are about letters in words in the domain of written and spoken language, numbers are included in the inputs for the random test cases and they require no special treatment. */


// P: An string of two words in lowercase.
// R: A string of two words, with the first letter of each word being swapped
// E: 'good bye' --> 'bood gye'

function spoonerize(str) {
    // Separate the words
    let words = str.split(' ')
    //Join the first letter of one word, with the rest of the word of the other one
    let word1 = words[1][0].concat(words[0].slice(1,words[0].length))
    let word2 = words[0][0].concat(words[1].slice(1,words[1].length))
    // Join both words with a space
  return `${word1} ${word2}`
}