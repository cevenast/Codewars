/*Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// Answer

function duplicateCount(text){
    text = text.toLowerCase()
    let counter = {}
    
    text.split('').forEach(letter =>{  //If the key exists, adds one, if not it creates one with a value of 1
      letter in counter ? counter[letter] += 1 : counter[letter] = 1
    })
    
    let repeated = 0 //checks how many keys of the counter object have a value equal or greater than 2
    for (key in counter){
      if (counter[key] >= 2){
        repeated += 1
      }
    }
    return repeated
  }