//Aritimatic Operations 
// let a = 5;
// let b = 2;

// console.log("a + b = ",a+b)
// console.log("a - b = ",a-b)
// console.log("a * b = ",a*b)
// console.log("a / b = ",a/b)
// console.log("a % b = ",a%b) //(Modulus) well give remainder 
// console.log("a ** b = ",a**b) //(Exponentiation **) 5 power 2(5^2) = 5*5 = 25

// Unary Operators
// let a = 5;
// let b = 2;
// 1) Increment Operator(++)
// 2) Decrement Operator(--)
// here a = 2 if i give a++(2 + 1 = 3) a++(post increment)
// here a = 2 if i give a--(2 - 1 = 1) a--(post decrement)
// console.log("a++ = ",a++); // here in console it will show a = 5 becz it is post increment 

// console.log("a = ",a); // here it will show post increment value a = 6

// console.log("b-- = ",b--); // here in console it will show b = 2 becz it is post increment 
// console.log("b = ",b); // here it will show post increment value b = 1

// // ++a(pre increment)
// console.log("++a =",++a); // here in console it will increment 
// // --a(pre decrement)
// console.log("--b =",--b); // here in console it will decrement 

// Assignment Operators
// let a = 5;
// let b = 2;

// //(+=) operator
//  a+=4 // a = a + 4;
// console.log("a = ",a);
// a-=4 // a = a - 4;
// console.log("a = ",a);
// a*=2 // a = a * 2;
// console.log("a = ",a);
// a/=2 // a = a / 2;
// console.log("a = ",a);
// a%=2 // a = a % 2;
// console.log("a = ",a); // will show remainder
// a**=4 // a = a ** 2; // (** meanings a power b)
// console.log("a = ",a);

// Comparison Operators

// let a = 5;
// let b = 2;

// console.log("a == b",a==b);
// console.log("a != b",a!=b);
// console.log("a > b", a>b);
// console.log("a < b", a<b);
// console.log("a >= b", a>=b);
// console.log("a <= b", a<=b);

// // example 1 :-
// let c = 5;
// let d = "5"; 
// console.log("c == d",c==d); // here first it convert into String to number and then it will compare // True

// // example 2 :- here we check Equal to & type 
// console.log("c === d",c===d); // here it will check type & equal to // False
// console.log("c !== d",c!==d); // here it will check type & not equal to // True

//Logical Operators 

// let a = 6;
// let b = 5;

// let cond1 = a > b; // true
// let cond2 = a === 6; //true
// let cond3 = b == 4; // false
// console.log("cond1 && cond2 = ",cond1 && cond2); // if we use && if both condition get true only we will get true if not false 
// console.log("cond1 && cond3 = ",cond1 && cond3); // if we use && if both condition get true only we will get true if not false
// console.log("cond1 || cond3 = ",cond1 || cond3); // if we use || if any of one condition get true we will get true, if both get false we will get false
// console.log("cond1 =" ,!cond1); // if the condition is true,it will give opposite answer false
// console.log("!(a < b)", !(a < b)) // if the condition is true,it will give opposite answer false

// Conditional Statements

//if statement
// if else statement

// let age = 25;

// if( age > 18){
//     console.log("can vote");
// }else{
//     console.log("can't Vote");
// }

// let  mode = "light";
// let color;

// if(mode === "dark"){
//     color = "black";
// }else{
//     color = "white";
// }
// console.log("color :",color);

// let number = 25;
// let result;
// if(number%2===0){
//     result = "Even number";
// }else {
//     result = "Odd number";
// }
// console.log("result :",result);

// else if statement

// let mode = "blue";
// let color;

// if(mode === "dark"){
//     color = "black";
// }else if (mode === "blue"){
//     color = "Skyblue";
// }else {
//     color = "white";
// }
// console.log(color,"color");

// if(mode === "blue") console.log(color ="blue");

// Turnery Operator // simpler, compact if-else

// let age = 25;

// console.log("Result :",age > 18 ? "adult" : "not adult");

// Switch

let exp = "Orange";

switch(exp){
    case 'Orange' : console.log("Orange");
    break;
    case 'papaya' : console.log("papaya");
    break;
    default: console.log("not found");
}








