/**
 * Problem - The Dictionary Class
 * Note- length property is not used in count function because length doesn't work with string keys.
 * var arr = new Array();
 * arr["Sid"] = 1;
 * arr["Sidd"] = 2;
 * arr.length // 0
 * arr[0] = 1;
 * arr[1] = 2;
 * arr.length // 2 
 */

 function Dictionary(){
     this.add = add;
     this.dataStore = new Array();
     this.find = find;
     this.remove = remove;
     this.showAll = showAll;
     this.count = count;
     this.clear = clear;
 }

 function add(key, value){
     this.dataStore[key] = value;
 }

 function find(key){
     return this.dataStore[key];
 }

 function remove(key){
     delete this.dataStore[key];
 }

 function showAll(){
     for(var key in Object.keys(this.dataStore)){
        console.log(key + "->" + this.dataStore[key]);
     }
 }

 function count(){
     var n = 0;
     for(var key in Object.keys(this.dataStore)){
         ++n;
     }
     return n;
 }

 function clear(){
     for(var key in Object.keys(this.dataStore)){
         delete this.dataStore[key];
     }
 }