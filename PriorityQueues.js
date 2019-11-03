/**
 * Problem - Priority Queues
 */

 function Patient(name, code){
     this.name = name;
     this.code = code;
 }
 function dequeue(){
     var priority = this.dataStore[0].code;
     for(var i=1; i< this.dataStore.length; ++i){
         if(this.dataStore[i].code < priority){
            priority = i;           
         }
     }
     return this.dataStore.splice(priority, 1);
 }

 function toString(){
     var retStr = "";
     for(var i=0; i< this.dataStore.length; ++i){
        retStr += this.dataStore[i].name + " code: "
        + this.dataStore[i].code + "\n";       
     }
     return retStr;
 }

 //implementation 
 var p = new Patient("Smith",5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());
// another round
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ");
print(ed.toString());

/** Output
 *  Smith code: 5
Jones code: 4
Fehrenbach code: 6
Brown code: 1
Ingram code: 1
Patient being treated: Jones
Patients waiting to be seen:
Smith code: 5
Fehrenbach code: 6
Brown code: 1
Ingram code: 1
Patient being treated: Ingram
Patients waiting to be seen:
Smith code: 5
Fehrenbach code: 6
Brown code: 1
Patient being treated: Brown
Patients waiting to be seen:
Smith code: 5
Fehrenbach code: 6
 */