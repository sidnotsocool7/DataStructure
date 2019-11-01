/**
 * Problem - A list based application
    Note - films.txt
    1. The Shawshank Redemption
    2. The Godfather
    3. The Godfather: Part II
    4. Pulp Fiction
    5. The Good, the Bad and the Ugly
    6. 12 Angry Men
    7. Schindler’s List
    8. The Dark Knight
    9. The Lord of the Rings: The Return of the King
    10. Fight Club
    11. Star Wars: Episode V - The Empire Strikes Back
    12. One Flew Over the Cuckoo’s Nest
    Read contents of file into our program - var movies = read(films.txt).split("\n"); 
 */

//Reading Text Files
function createArr(file){
    var arr = read(file).split("\n");
    for(var i =0; i<arr.length; ++i){
        arr[i] = arr[i].trim();
    }
    return arr;
}

//Using Lists to manage a kiosk
var movieList = new List();
for(var i=0; i<movies.length; i++){
    movieList.append(movies[i]);
}

//Native types
function displayList(list){
    for(list.front(); list.currPos() < list.length(); list.next()){
        console.log(list.getElement());
    }
}

//Customer Objects


