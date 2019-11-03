/**
 * Problem - Providing a count of dancers waiting to dance
 */

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (maleDancers.count() > 0) {
 console.log("There are " + maleDancers.count() +
 " male dancers waiting to dance.");
}
if (femaleDancers.count() > 0) {
 console.log("There are " + femaleDancers.count() +
 " female dancers waiting to dance.");
}

/** Output
 *  Female dancer is: Allison and the male dancer is: Frank
    Female dancer is: Cheryl and the male dancer is: Mason
    Female dancer is: Jennifer and the male dancer is: Clayton
    Female dancer is: Aurora and the male dancer is: Raymond
    
    There are 3 male dancers waiting to dance.
 */