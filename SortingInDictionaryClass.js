/**
 * Problem - Adding Sorting in dictionary class
 */

 function showAll(){
     for(var key in Object.keys(this.dataStore).sort()){
        console.log(key + "->" + this.dataStore[key]);
     }
 }