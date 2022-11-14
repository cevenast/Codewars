/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.*/

// Answer
// Avoiding use of regex

function isPangram(string){
  const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let counter = {}
  string = string.toLowerCase()
  for (let i = 0; i < string.length; i++){
    if (alpha.includes(string[i])){
        counter[string[i]] = counter[string[i]] + 1 || 1
  }
    }
  console.log(counter)
  
  return Object.keys(counter).length == 26
}