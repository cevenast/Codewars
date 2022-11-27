/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.*/

// P: A string 
// R: A string, replacing each character with a ( if it only appears once, and ) if appears more times
// E: "din"      =>  "((("
//    "recede"   =>  "()()()"
//    "Success"  =>  ")())())"
//    "(( @"     =>  "))((" 

// Answer

function duplicateEncode(word){
    word = word.toLowerCase()
    let counter = {}
    let newWord = ''
    
    for (let i = 0; i < word.length; i++){
      counter[word[i]] ? counter[word[i]] += 1 : counter[word[i]] = 1
    }
  
    for (let i = 0; i < word.length; i++){
      counter[word[i]] == 1 ? newWord += '(' : newWord += ')'
    }
  
    return newWord
}