/**
 * Problem - Creating two-dimensional arrays
 */

 Array.matrix = function(numRows, numCols, initial){
     var arr = [];
     for(var i=0; i<numRows; ++i){
         var columns = [];
        for(var j=0; j<numCols; ++j){
            columns[j] =  initial;
        }
        arr[i] = columns;
     }
     return arr;
 }

 var grades = [[89,77,78], [76,82,81], [91,94,89]];
 console.log(grades[2][2]); //89