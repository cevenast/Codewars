/* An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.

Your task is to return the number of zero sequences if the given array is zero-plentiful, oherwise 0.
Examples

[0, 0, 0, 0, 0, 1]  -->  1
# 1 group of 5 zeros (>= 4), thus the result is 1

[0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2
# 2 group of 4 zeros (>= 4), thus the result is 2

[0, 0, 0, 0, 1, 0]  -->  0 
# 1 group of 4 zeros and 1 group of 1 zero (< 4)
# _every_ sequence of zeros must be at least 4 long, thus the result is 0

[0, 0, 0, 1, 0, 0]  -->  0
# 1 group of 3 zeros (< 4) and 1 group of 2 zeros (< 4)

[1, 2, 3, 4, 5]  -->  0
# no zeros

[]  -->  0
# no zeros */

function zeroPlentiful(arr){
    if (arr.length < 4){
      return 0
    }
    let sequenceCounter = 0
    for (let i = 0; i <= arr.length; i++){
      if (arr[i-1] === 0){
        console.log('continue')
        continue
      }
      if (arr.slice(i,i+4).join('') == '0000'){
        sequenceCounter += 1
        console.log(sequenceCounter)
      }
      else if (arr.slice(i,i+1).join('') == '0' || arr.slice(i,i+2).join('') == '00' || arr.slice(i,i+3).join('') == '000'){
        return 0
      }
    }
    return sequenceCounter;
  }