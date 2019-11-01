/**
 * Problem - Testing the stack calss implementation
 */

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log(s.length()); //3
console.log(s.peek()); //Bryan
console.log(s.pop()); //Bryan
s.clear();
console.log(s.length()); //0
console.log(s.peek()); //undefined
