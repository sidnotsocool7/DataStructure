/**
 * Problem - Aggregate Operations on Array
 * Note - Shallow Copy - When you assign one array to another array, you are assigning a reference to the assigned array. When you make a change in the original array, the change is reflected
 *                       in other array as well. The new array simply points to the original array's alements.
 *        Deep Copy -   Each of the original array's elements is actually copied to the new array's elements.
 */

//Shallow Copy
var nums = [];
for (var i = 0; i < nums.length; ++i) {
  nums[i] = i + 1;
}
var samenums = nums;
nums[0] = 400;
console.log(samenums[0]); //400

//Deep Copy

function copy(arr1, arr2) {
  for (var i = 0; i < arr1.length; ++i) {
    arr2[i] = arr1[i];
  }
}
var nums1 = [];
for (var i = 0; i < nums1.length; ++i) {
  nums1[i] = i + 1;
}
var samenums1 = [];
copy(nums1, samenums1);
nums1[0] = 400;
console.log(samenums[0]); //1
