/**
 * Problem - Processing 2-D Array Elements
 * Note - To perform a row-wsie computation, we have to flip the loops
 * for (var col = 0; col < grades.length; ++col) {
     for (var row = 0; row < grades[col].length; ++row) {
        total += grades[row][col];
     }
    }
 */

var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
var total = 0;
var average = 0.0;

for (var row = 0; row < grades.length; ++row) {
  for (var col = 0; col < grades[row].length; ++col) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  console.log(
    "Student " + parseInt(row + 1) + " average: " + average.toFixed(2)
  );
  total = 0;
  average = 0.0;
}

//Output
//Student 1 average: 81.33
//Student 2 average: 79.67
//Student 3 average: 91.33
