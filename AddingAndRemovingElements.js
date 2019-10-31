/**
 * Problem - Adding and Removing Elements from the middle of an Array
 */

 //Add Elements
 var nums = [1,2,3,7,8,9];
 var newElements = [4,5,6];
 nums.splice(3,0,newElements);
 console.log(nums); //1,2,3,4,5,6,7,8,9

 //Add Elements
 var nums2 = [1,2,3,7,8,9];
 nums2.splice(3,0,4,5,6);
 console.log(nums2); //1,2,3,4,5,6,7,8,9

 //Removing Elements
 var nums3 = [1,2,3,100,200,300,400,4,5];
 nums3.splice(3,4);
 console.log(nums3); //1,2,3,4,5