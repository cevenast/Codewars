/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string.*/

// P: Any string
// R: The same string without the exclamation marks
// E: "Hello World!" => "Hello World"

// Answer

function removeExclamationMarks(s){
    return s.replaceAll('!',''); // Replaces every exclamation mark with an empty string 
  }