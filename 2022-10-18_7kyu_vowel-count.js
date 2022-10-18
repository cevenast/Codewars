/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/


// Answer

function getCount(str) {
    let arr = str.split('')
    let counter = 0
    arr.forEach(letter => {
      if (letter == 'a' || letter == 'e' || letter =='i' || letter=='o' || letter=='u'){
        counter += 1
      }
    })
    return counter
  }