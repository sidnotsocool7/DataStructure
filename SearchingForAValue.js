/**
 * Problem - Searching for a value in array using accessor functions
 */

 var names = ["John", "Mike", "David", "Mary","Houston","Mike"];
 var name = prompt("Enter a name to search for:");
 var position = names.indexOf(name);
 if(position >=0){
    console.log("Found" + name + "at positon" + position);
 } else{
    console.log(name + "not found in array");
 }
var lastPosition = names.lastIndexOf("Mike");
if(lastPosition >=0){
    console.log("Found" + name + "at last positon" + lastPosition);
 } else{
    console.log(name + "not found in array");
 }