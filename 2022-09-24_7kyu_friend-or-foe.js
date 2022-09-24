/*Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

Note: keep the original order of the names in the output.
*/


// Answer

function DNAStrand(dna){
  let newStr  = ''
  for (let i = 0; i < dna.length; i++){
    switch (dna[i]){
        case ('C'):
          newStr += 'G'
          break
        case ('G'):
          newStr += 'C'
          break
        case ('A'):
          newStr += 'T'
          break
        case ('T'):
          newStr += 'A'
          break
      }//switch
    }//for
  return newStr
  }