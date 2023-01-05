/* Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

*/

// Answer

function cleanString(str) {
  for (let i = 0; i < str.length; i++){
    if (str[0] == '#'){
      str = str.slice(1)
    }
    if (str[i+1] == '#'){
      if (i == 0){
        str = str.slice(2)
        i += -1
      }
      else{
        str = str.slice(0,i).concat(str.slice(i+2))
        i += -2
      }
    }
  }
  return str
}