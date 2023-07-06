//Find the last element of the following arrays.
//arr1 = [3,7,34,90,12]
//arr2 = [true, "green", "where",12,56]

arr1 = [3,7,34,90,12];
console.log(arr1.slice(-1));

arr2 = [true,"green","where",12,56];
console.log(arr2.slice(-1));

//Write a JS program that will join the following array elements into a string
//myPets = ["Cow", "Bird", "Snake", "Dog"];

myPets = ["Cow","Bird","Snake", "Dog"];
let x = myPets.join()
console.log(x)

//Write a JS script to sort the following array items
//var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
var y = arr3.sort()
console.log(y);

//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
//var arr = ["apple", "mango", "apple",
            //"orange", "mango", "mango"];

    var arr = ["apple","mango","apple","orange","mango","mango"];
    function v(arr){
        return arr.filter((item,index) => arr.indexOf(item)===index);
    }
    function q(arr){
        return arr.filter((item,index) => arr.indexOf(item)!=index);
    }
    console.log(v(arr));
    console.log(q(arr));



   // Write a JS script to search for the following word in the array.
//"way"
//If the word is present, console it else console "the search word was not found"
//let arr5 = ["the", "way", "x", 4];

// let arr5 = ["the", "way", "x", 4];
// arr5.search(function(x){
// if(x="word"){
//     return "present"
// }
// if (x!="word"){
//     return "the search word not found"
// }
// })
// console.log(arr5);





//Write a JS script to sort the following string
let word = "sevink"
let w = (word.split(""));
console.log(w.sort());


