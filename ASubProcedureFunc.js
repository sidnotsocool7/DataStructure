/**
 * Problem - A subprocedure or void function in javascript
 * Note- All function parameters in Javascript are pass by value, and there are no reference parameters. However, there are reference objects such as arrays which are passed to functions by reference.
 */

function curve(arr, amount) {
  for (var i = 0; i < arr.length; ++i) {
    arr[i] += amount;
  }
}
var grades = [77, 75, 73, 82, 90];
curve(grades, 5);
console.log(grades); //[82,80,78,87,95]
