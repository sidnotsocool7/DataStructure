/**
 * Problem - Putting Array Elements in Order
 * Note - sort function sorts data lexicographically, assuming elements as strings even though
 *        elements are in numbers.
 *  Sorting for numbers - For numbers, the ordering function can simply subtract one number from another
number. If the number returned is negative, the left operand is less than the right
operand; if the number returned is zero, the left operand is equal to the right operand;
and if the number returned is positive, the left operand is greater than the right operand. 
 */

 //Reverse
 var nums = [1,2,3,4,5];
 nums.reverse();
 console.log(nums); //5,4,3,2,1

 //Sort with strings
 var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
 names.sort();
 console.log(names); //Bryan,Clayton,Cynthia,David,Mike,Raymond

 //Sort with numbers
 var nums1 = [3,1,2,100,4,200];
 nums1.sort();
 console.log(nums1); //1,100,2,200,3,4

 //sort correctly with numbers. 
 function compare(num1, num2) {
     return num1 - num2;
 }
 var nums2 = [3,1,2,100,4,200];
 nums2.sort(compare);
 console.log(nums2) //1,2,3,4,100,200