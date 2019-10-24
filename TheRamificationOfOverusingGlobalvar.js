/**
 * Problem - The ramification of overusing global variables
 */

function showScope() {
  scope = "local";
  return scope;
}

scope = "global";
console.log(scope); //"global"
console.log(showScope()); //"local"
console.log(scope); //"local"
