/*The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.*/

// P: Any string, considering bad written ones.
// R: A string, composed of a # followed by every word starting with uppercase with no spaces.
// E: " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
//    "    Hello     World   "                  =>  "#HelloWorld"
//    ""                                        =>  false 

// Answer

function generateHashtag (str) {
    // Check if input is empty
    str = str.trim().toLowerCase()
    if (str.length == 0){
      return false
    }
    
    // Separate all words
    let arr = str.split(' ')
    
    // Capitalize each letter of every word
    arr = arr.filter(word => word.length > 0)
    arr = arr.map(word => word[0].toUpperCase() + word.slice(1,word.length))
    
    // Join each word without spaces
    let hashtag = "#"
    hashtag += arr.join('')
    
    // Check length of final result < 140 chars
    if (hashtag.length <= 140){
      return hashtag
    }
    else{
      return false
    }
  }