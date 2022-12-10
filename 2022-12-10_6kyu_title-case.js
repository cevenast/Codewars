/*A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.


First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
*/

// P: Two strings. The first one, the title to be converted. The second, the exception words separated by spaces.
// R: A string of every word in the title starting with uppercase, except for the words in the second argument.
// E: titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
//    titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
//    titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'


function titleCase(title, minorWords) {
    // convert title into an array
  let titleArr
  if (title.length > 0){
    titleArr = title.toLowerCase().split(' ')
  }
  else{
    return '' // If title is empty, return empty string
  }  
  
  // convert minorWords into an array
  let minor
  minorWords ?  minor = minorWords.toLowerCase().split(' ') : minor = ''
  
  // For every word in the title array
  let finalTitle = titleArr.reduce((ini, word, index) => {
    if (minor.includes(word) && index > 0){ // Check if the word is in minor words and not the initial one
      return ini + word + ' '
    }
    else{ // Capitalise the first letter
      return ini + word[0].toUpperCase() + word.slice(1,word.length) + ' '
    }
  },'')
    
  return finalTitle.trim()
  
}

