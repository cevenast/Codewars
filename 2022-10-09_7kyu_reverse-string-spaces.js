/*Simple, remove the spaces from the string, then return the resultant string.*/


// Answer


function noSpace(x){
    let arr = x.split(' ') //Creates an array with words as elements
    return arr.join('') //Joins the words in a string with no spaces in between
  }