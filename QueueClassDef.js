/**
 * Problem - Queue class definition and a test program
 */

 function Queue(){
     this.dataStore = [];
     this.enqueue = enqueue;
     this.dequeue = dequeue;
     this.front = front;
     this.back = back;
     this.toString = toString;
     this.empty = empty;
     this.count = count;
 }

 function enqueue(element){
     this.dataStore.push(element);
 }

 function dequeue(){
     return this.dataStore.shift();
 }

 function front(){
     return this.dataStore[0];
 }

 function back(){
     return this.dataStore[this.dataStore.length - 1];
 }

function toString(){
    var retStr = "";
    for(var i=0; i<this.dataStore.length; ++i){
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty(){
    if(this.dataStore.length === 0){
        return true;
    }
    return false;
}    
function count(){
    return this.dataStore.length;
}
var q = new Queue();
q.enqueue("ABC");
q.enqueue("DEF");
q.enqueue("GHI");

console.log(q.toString()); //ABC    
                           //DEF
                           //GHI
q.dequeue();
console.log(q.toString()); //DEF
                           //GHI
console.log(q.front()); //DEF
console.log(q.back()); //GHI                           