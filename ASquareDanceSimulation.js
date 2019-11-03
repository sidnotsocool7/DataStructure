/**
 * Problem - A square dance simulation
 */

 function Dancer(name, sex){
     this.name = name;
     this.sex = sex;
 }

 function getDancers(males, females){
     var names = read("dancers.txt").split("\n");
     for(var i=0; i<names.length; ++i){
        names[i] = names[i].trim();
    }
    for(var i=0; i<names.length; ++i){
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if(sex === "F"){
            femaleDancers.enqueue(new Dancer(name, sex));
        }
        else{
            maleDancers.enqueue(new Dancer(name, sex));
        }
    }
 }

 function dance(males, females){
     console.log("The dance partners are : \n");
     while(!females.empty() && !males.empty()){
         person = females.dequeue();
         console.log("Female dancer is:" + person.name);
         person = males.dequeue();
         console.log("male dancer is:" + person.name);
     }
 }

 //Test Program

 var maleDancers = new Queue();
 var femaleDancers = new Queue();
 getDancers(maleDancers, femaleDancers);
 dance(maleDancers, femaleDancers);
 if(!femaleDancers.empty()){
    console.log(femaleDancers.front().name + "is waiting to dance");
 }
 if(!maleDancers.empty()){
    console.log(maleDancers.front().name + "is waiting to dance");
 }
 
 /** Output
  * The dance partners are:
    Female dancer is: Allison and the male dancer is: Frank
    Female dancer is: Cheryl and the male dancer is: Mason
    Female dancer is: Jennifer and the male dancer is: Clayton
    Female dancer is: Aurora and the male dancer is: Raymond
    Bryan is waiting to dance.
  */