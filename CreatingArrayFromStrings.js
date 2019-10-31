/**
 * Problem - Creating Arrays from StringsThe output from this program is:
                word 0: the
                word 1: quick
                word 2: brown
                word 3: fox
                word 4: jumped
                word 5: over
                word 6: the
                word 7: lazy
                word 8: dog
 * Note - 
 */

 var sentence = "the quick brown fox jumped over the lazy dog";
 var words = sentence.split();
 for(var i=0 ; i<words.length ;++i){
     console.log("word" + i + ":" + words[i]);
 }