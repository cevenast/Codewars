/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.*/

// P: Any string.
// R: A string with every character in the original string repeated once.
// E: "String"      -> "SSttrriinngg"
//    "Hello World" -> "HHeelllloo  WWoorrlldd"
//    "1234!_ "     -> "11223344!!__  "


// Answer

function doubleChar(str) {
    let newStr = "" // create an empty string to store every character twice
    for (let i = 0; i < str.length ; i++){
      newStr += str[i].repeat(2)
    }
    return newStr
  }