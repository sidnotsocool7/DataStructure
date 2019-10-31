/**
 * Problem - Non-Array-Generating Iterator Functions
 */

 // forEach function
 function square(num){
    console.log(num, num * num);
 }
 var nums = [1,2,3,4];
 nums.forEach(square);
 //Output - 1 1
 //         2 4
 //         3 9
 //         4 16

 //every function
 function isEven(num){
    return num % 2 == 0; 
 }
 var nums1 = [2,4,6,8,10];
 var even = nums1.every(isEven);
 if(even){
    console.log("All numbers are even");
 } else{
    console.log("Not all numbers are even");
 }

 //some function
 var nums2 = [1,2,3,4,5];
 function isEven1(num){
    return num % 2 == 0;
 }
 var someEven = nums2.some(isEven1);
 if(someEven){
    console.log("some numbers are even");
 } else{
    console.log("No numbers are even");
 }

 //reduce function
function add(runningTotal, currentValue){
   return runningTotal + currentValue;
}
var nums3 = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
console.log(sum3); //55

// reduceRight function
function concat(accumulatedString, item){
   return accumulatedString + item;
}
var words = ["the", "quick", "brown","fox"];
var sentence = words.reduceRight(concat);
console.log(sentence);// fox brown quick the
