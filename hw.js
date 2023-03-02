// > isSubstring("time to program", "time")
// true

// > isSubstring("Jump for joy", "joys")
// false


function isSubstring(string, target){

  for (let i = 0; i < string.length; i++) {
    let word = string[i]
    if (word === target) {
      return true
    }
  }
  return false
}

function fizzbuzz(array) {
  let fizz = []
  for (let i = 0; i < array.length; i++){
    let num = array[i]
    if ((num % 3 === 0 || num % 5 === 0) && !(num % 3 === 0 && num % 5 === 0)) {
      fizz.push(num)
    }
  }
  return fizz
}

function isPrime(num) {
  if (num < 2) {
    return false
  }

  for (let i = 2; i < num; i ++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
} 


function sumPrimes(num) {
  sum = 0
  sumNums = []
  
}
