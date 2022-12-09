/*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

*/

// P: A string containing T, G, C and A
// R: A string, switching the original string's Ts into As, and Gs into Cs, and the other way around
// E: "ATTGC" --> "TAACG"
//    "GTAT" --> "CATA"

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