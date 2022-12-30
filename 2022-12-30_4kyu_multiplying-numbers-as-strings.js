/*Multiply two numbers! Simple!

    The arguments are passed as strings.
    The numbers may be way very large
    Answer should be returned as a string
    The returned "number" should not start with zeros e.g. 0123 is invalid

Note: 100 randomly generated tests!
*/

//P: Two numbers as strings.
//R: The result of the multiplication of the numbers as a string.
//E: multiply("30", "69") -> "2070"
//   multiply("0000001", "3"), "3"
//   multiply("1020303004875647366210", "2774537626200857473632627613"), "2830869077153280552556547081187254342445169156730"     

// Answer

    // Since javascript can only handle numbers with 16 digits, operations must only handle small numbers
    // In order to do that, an attempt was made to recreate the grade-school multiplication algorithm

    function simpleMultiply(x,y){ //Makes a one digit multiplication
        let currentMult // Stores the multiplication of y with each digit in x, plus the surplus
        let totalMult = '' // String, stores each last digit of currentMult results to form the final product
        let currentSurplus = 0
        for (let i = x.length-1; i > 0; i += -1){
        currentMult = String(Number(y)*Number(x[i]) + Number(currentSurplus))
        if (currentMult.length > 1){
            currentSurplus = currentMult[0]
            totalMult = currentMult[1].concat(totalMult)
        }
        else{
            currentSurplus = 0
            totalMult = currentMult[0].concat(totalMult)
        }
        }
        //When i is 0
        currentMult = Number(y)*Number(x[0]) + Number(currentSurplus)
        totalMult = String(currentMult).concat(totalMult)
        return totalMult
    }
  
  function filler(products){
    let filled = products.map((product, index,arr) => {
      for (let i = 0; i < index; i++){ //Adds zeros to the right
        product = product.concat('0')
      }
      return product
      })
      
    let filledLeft = filled.map((product,index,arr) => { // Adds zeros to the left
        while (product.length < arr[arr.length-1].length){ //compares string with maximum length element
          product = '0'.concat(product)
      }
      return product   
    })
    return filledLeft
  }
  
  function simpleAdding(arr){
    let currentAdd
    let currentSurplus = 0
    let totalAdd = ''
    if (arr.length > 1){
      for (let i = arr[0].length-1; i > 0; i += -1){
        currentAdd = arr.reduce((ini, product) => ini + Number(product[i]), 0)
        currentAdd = String(Number(currentAdd) + Number(currentSurplus))
        totalAdd = currentAdd[currentAdd.length-1].concat(totalAdd)
        currentSurplus = currentAdd.slice(0,-1)
    }
      currentAdd = arr.reduce((ini, product) => ini + Number(product[0]), 0)
      currentAdd = String(Number(currentAdd) + Number(currentSurplus))
      totalAdd = currentAdd.concat(totalAdd)
      return totalAdd
    }
    else{
      return arr[0]
    }
    
  }
  
  function multiply(a, b){
    if (a == '0' || b == '0') return '0'
    let products = []
    for (let i = b.length-1; i >= 0; i += -1){
      products.push(simpleMultiply(a,b[i]))  
    }
    products = filler(products)
    let result = simpleAdding(products)
    return result.replace(/^0+/, '')
  }