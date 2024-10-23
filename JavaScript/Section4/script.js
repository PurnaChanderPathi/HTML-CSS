// Arrays 
// let marks = [11,22,33,44,55];
// console.log("marks",marks);
// console.log("marksLength",marks.length);
// console.log("marks Type of :", typeof marks);

// // Array andices
// console.log("to get index 1",marks[0]);
// // in jS String are immutable and Arrays are mutable

// //Loops over arrays 

// // for loop
// for(let i=0; i<marks.length;i++) {
//    console.log("marks :",marks[i]);
// }

// //for of loop 
// for(let mark of marks){
//     console.log("marks :",mark);
// }

// let cities = ["hyd","viz","kp","madhapur"];
// for( let city of cities){
//     console.log("cities :",city);
// }

//Array methods 
//push :- used to add item at end of an array
// let fruits = ["apple","Orange","Mango","banana"];
// fruits.push("papaya");
// console.log(fruits);
// fruits.push("Kiwi","Dragen fruit"); // can add multiple
// console.log(fruits);

//pop :- delete item from end
// let fruits = ["apple","Orange","Mango","banana"];
//  console.log(fruits);
//  let deletedItem = fruits.pop();
//  console.log("deletedItem :",deletedItem);
//  console.log(fruits);

//  // ToString
//  console.log("Coverting to String : ",fruits.toString());

 //Array methods 

 //Concat() :- joins multiple arrays and return results
let marvelHeros = ["ironMan","CaptainAmerica","Thor","Hulk"];
let dcHeros = ["batMan","SuperMan","WonderWoman"];

// let heros = marvelHeros.concat(dcHeros);
// console.log("heros",heros);

// //unshift :- will push data from start

// marvelHeros.unshift("CaptainMarvel");
// console.log("Marvel :",marvelHeros);

// //shift :- will delete data from start
// dcHeros.shift();
// console.log("DCheros :",dcHeros);

//** imp := methods in Arrays and Strings start with small letter */

//Slice :- return a piece of array
// let marvel = marvelHeros.slice(0,2);
// console.log("marvel",marvel);

//splice() :- change original array(add,remove,replace)
// splice(startId,delCount,newEle) 
marvelHeros.splice(1,1,"CaptainMarvel");
console.log(marvelHeros);
marvelHeros.splice(1,0,"CaptainMarvel");
console.log(marvelHeros);




