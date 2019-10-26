/**
 * Problem - Adding Elements to an Array
 */
//Using push function
var nums = [1,2,3,4,5];
nums.push(6);
console.log(nums); // 1,2,3,4,5,6

//Using length property
var nums1 = [1,2,3,4,5];
nums1[nums1.length] = 6;
console.log(nums1); //1,2,3,4,5,6

//Adding data at the beginning
var nums2 = [2,3,4,5];
for(var i= nums2.length ; i>=0; --i){
    nums2[i] = nums2[i-1];
}
nums2[0] = 1;
console.log(nums2) //1,2,3,4,5

//Using unshift function
var nums3 = [3,4,5];
nums3.unshift(1,2);
console.log(nums3);//1,2,3,4,5
