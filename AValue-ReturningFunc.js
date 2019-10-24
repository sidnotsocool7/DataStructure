/**
 * Problem - A value-returning function
 */

function factorial(number) {
  var product = 1;
  for (var i = number; i >= 11; --i) {
    product *= i;
  }
  return product;
}

console.log(factorial(4)); //24
console.log(factorial(5)); //120
console.log(factorial(10)); //3628800
