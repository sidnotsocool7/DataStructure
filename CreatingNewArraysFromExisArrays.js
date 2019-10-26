/**
 * Problem - Create new arrays form existing arrays using accessor functions.
 */

 var cisDept = ["Mike", "David", "Llyod"];
 var dmpDept = ["Houston", "Magic"];
 var itDept = cisDept.concat(dmpDept);
 console.log(itDept); // Mike,David,Lloyd,Houston,Magic
 var itDiv = ["Mike", "David", "Llyod", "Rahul", "Raj","Yuvi", "Yash"];
 var dmpDiv = itDiv.splice(3,3);
 var cisDmp = itDiv;
 console.log(dmpDiv); // Rahul,Raj,Yuvi
 console.log(cisDmp); //Mike,David,Lloyd,Yash