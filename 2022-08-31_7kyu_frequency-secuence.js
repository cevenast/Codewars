/*Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

Example (s, sep --> Output)

"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1" */

function freqSeq(str, sep) {
    let newStr = ''
    const counter = {}
    for (let i = 0; i < str.length; i++){
      counter[str[i]] ? counter[str[i]] += 1 : counter[str[i]] = 1
    }
    for (let i = 0; i < str.length; i++){
      if (i < str.length -1){
        newStr = newStr.concat(counter[str[i]]).concat(sep)
      }
      else{
        newStr = newStr.concat(counter[str[i]])
      }
    }
    return newStr
  }
  