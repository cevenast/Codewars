/*The Fibonacci numbers are the numbers in the following integer sequence (Fn):

    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

    F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

    F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

F(n) being the smallest one such as F(n) * F(n+1) > prod.
*/

//P: An integer
//R: An array. If the product of two consecutive number of the fibonacci secuence return that integer, return the two numbers and true in the array. If you surpassed that number, return the last two numbers calculated and false.
//E: 4895 -> [55, 89, true]
//   5895 -> [89, 144, false]


function productFib(prod){
    // Must have an array for the fibonacci sequence
    let fibonacci = [0,1]
    // Variables are gonna store the current fibonacci element, a counter and a testing product
    let currentProd = 1
    let currentTerm 
    let counter = 0
    
    // Creates the fibonacci secuence and tests if the current product is less than the argument
    while (currentProd < prod){
      currentProd = fibonacci[counter] * fibonacci[counter + 1]
      currentTerm = fibonacci[counter] + fibonacci[counter + 1]
      fibonacci.push(currentTerm)
      counter++
      }
    
    if (currentProd == prod){
        return [fibonacci[counter-1], fibonacci[counter],true]
      }
    else{
      return [fibonacci[counter-1], fibonacci[counter],false]
    }
}