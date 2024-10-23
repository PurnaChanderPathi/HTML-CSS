// Functions :- Block of code that performs a specific task, can be invoked whenever needed

// Function Definition 
//Syntax
// function functionName() {
//     // do some code
// }
// //Syntax
// function functionName(param1,param2...){
//     // do some code
// }
// // to call function
// Function Call :- 
// functionName();

// without pram
// function myFunction() {
//     console.log("Welcome to my channel");
// }
// myFunction();

//with param
// function myFunction(msg) { // here msg = parameter
//     console.log(msg);
// }
// myFunction("Hello every one");  // here "Hello every one" is an argument

// function sumOf(s1,s2){
//     console.log("sumOf = ",s1+s2);
// }
// sumOf(2,5);
// in functions params is like local variables and its scope up to function block

//sum function
// function sum(a,b){
//     return a + b;
// }

// //Multiplication function
// function sum(a,b){
//     return a * b;
// }

//Arrow Functions :- Compact way of writing a function

// syntax :- 
// const functionName = (param1,param2...) => {
//     //do some code
// }
// //example
// const sum = (a,b) => {
//     // do some code
// }

// sum arrow function 
// const arrowSum = (a,b) => {
//    console.log(a+b);
// }

//multiplication ArrowFunction
// const arrowMulti = (a,b) => {
//     return a*b;
// }

// const printHello = () => {
//     return "Hello";
// }


// forEach loop in Arrays
//arr.forEach(callBackFunction)
// CallbackFunction : - Here, it is a function to execute for each element in the array

// * A callback is a function passed sa an argument to the another function

// example
// arr.forEach((val) => {
//     console.log(val);
// })

//let arr = [1,2,3,4,5];

// using function in it
// arr.forEach(function printVal(val){
//     console.log(val);
// });

// using arrow function in it

    // let arr = ["IronMan","CaptainAmerica","Hulk"];
    // arr.forEach( (val , idx, arr) => {
    //     console.log(val.toUpperCase(),idx,arr);
    // });

    // higher order functions/methods :- that either take other function as a parameter inside them 
    // or they return another function as there output.



// some more array methods
// Map :- is same as for-Each but it will give new array at output
// Creates a new array with the results of some operation, the value its callback return are used to form new array
// arr.map(callbackFnx(value,index,array));

// let newArr = arr.map((val) => {
//     return val*2;
// })

// let num = [1,2,3,4,5];

// let numResult = num.map((val => {
//     return val*2;
// }));

// console.log(numResult);

//Filter method :- creates a new array of element that gives true for a condition/filter.

// eg:- all even elements
//example :-
// let newArr = arr.filter((val) => {
//     return val%2 === 0;
// })

// let arr = [1,2,3,4,5,6,7];

// let arrayFilter = arr.filter((val) => {
//     return val%2 !== 0;
// })
// console.log(arrayFilter);

//reduce method :- Perfoms some operations & reduces the array into single value. it returns that single value

let array1 = [5,3,10,7,2];
let sumWithInitial = array1.reduce((prev,curr) =>{
    return prev > curr ? prev : curr;
});
console.log(sumWithInitial);

