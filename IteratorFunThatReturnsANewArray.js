/**
 * Problem - Iterator functions that returns a new array
 */

 // map function
 function first(word){
     return word[0];
 }
 var words = ["for", "your","information"];
 var acronym = words.map(first);
 console.log(acronym.join("")); //fyi

// filter function
function afterc(str){
    if(str.indexOf("cie") > -1){
        return true;
    }
    return false;
}
var words1 = ["recieve","deceive","percieve","deceit","concieve"];
var missplled = words1.filter(afterc);
console.log(missplled); //recieve, percieve, concieve