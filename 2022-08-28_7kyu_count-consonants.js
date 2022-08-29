/*Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.*/

// Answer

function consonantCount(str) {
  str = str.toLowerCase()
  const consonants = 'bcdfghjklmnpqrstvwxyz'
  let constNumber = 0
  for (let i = 0; i < str.length ; i++){
    if (consonants.includes(str[i])) constNumber += 1
  }
  return constNumber
}