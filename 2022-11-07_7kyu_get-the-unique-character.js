// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 

// P: A word (string) of length 0 < str < 1000
// R: The middle character(s) of the word represented as a string. 
// E: "test" should return "es"
//    "testing") should return "t"
//    "A" should return "A"

// Creates a function that takes in a string
function getMiddle(s)
{
  if (s.length%2  == 0){                    // Checks if word is even
    return s[s.length/2-1] + s[s.length/2]  // If even, returns the middle 2 characters
  }
  else{
    return s[Math.floor(s.length/2)]        // If odd, returns the middle character
  }
}