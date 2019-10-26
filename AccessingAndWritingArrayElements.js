/**
 * Problem - Accessing and Writing Array Elements
 * Note - Because js arays are objects, they can grow beyond the size specified when they were created. 
 */

 var nums = [];
 for(var i=0; i < 100; ++i){
    nums[i] = i+1;
 }
 var numbers = [1,2,4];
 var sum = numbers[0] + numbers[1] + numbers[2];
 var sum1 = 0;
 for(var j=0; j<numbers.length; ++j){
    sum += numbers[j];
 }