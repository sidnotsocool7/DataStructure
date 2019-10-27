/**
 * Problem - Removing Elements from an array
 */

 //Using pop function
 var nums = [1,2,3,4,5,9];
 var value = nums.pop();
 console.log(nums); //1,2,3,4,5
 console.log(value); //9

 //Removing from beginning of an array
 var nums1 = [9,1,2,3,4,5];
 for(var i = 0; i<nums1.length ; ++i){
     nums1[i] = nums1[i+1];
 }
 console.log(nums1); //1,2,3,4,5,

 //Using shift function
 var nums2 = [6,1,2,3,4,5];
 var value1 = nums2.shift();
 console.log(nums2); //1,2,3,4,5
 console.log(value1); //6