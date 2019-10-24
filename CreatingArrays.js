/**
 * Problem - A Javascipt array is actually a specialized type of Javascript object, with the indices being property Names that can be integers used to represent offsets.
 *           When integers are used for indices they are converted to strings internally in order to conform to the requirements  for Js objecs.
 */

var numbers = [];
console.log(numbers.length); //0
var numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1.length); //5
var numbers2 = new Array();
console.log(numbers2.length); //0
var numbers3 = new Array(1, 2, 3, 4, 5);
console.log(numbers3.length); //5
var numbers4 = new Array(10);
console.log(numbers4.length); //10
var objects = [1, "Joe", true, null];
var numbersVal = 3;
var arrVal = [1, 2, 3];
console.log(Array.isArray(numbersVal)); //false
console.log(Array.isArray(arrVal)); //true
