//    Loops & Strings 

// for(let i=1; i<=5; i++){
//     console.log("Loop");
// }

// calculate sum  of 1 to 5
// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum+=i;
// }
// console.log("sum :",sum);

// infinite loop :- a loop that never ends // never use in program

//while loop

// syntax
// while(condition){
//     //do some thing
// }

// let i = 0;
// while(i<=5){
//     console.log("i = ",i);
//     i++
// }

// do while loop  // it will execute atleast once

// syntax 
// do {
//     //do some thing
//    
// } while(condition);

// let i = 0;
// do{
//     console.log("i = ",i);
//     i++;
    
// }while(i<=5)

// for-of loop  // it will iterate Strings and arrays

// syntax : - 
// for( let val of strVar){
//     //do some code
// }

// let str = "Pathi";
// let size = 0;

//     for(let i of str){ // iterator -> characters
//         console.log("i :",i);
//         size++;
//     }
//     console.log("size = ",size);

// for-in loop

// syntax :-  used for Objects and arrays
// for(let key in objVar){
//     //do some code
// }

// let student = {
//     name: "Pathi",
//     age : 20,
//     cgpa : 7.5,
//     isPass : true,
// };

// for(let i in student){
//     console.log(i," : ",student[i]);
// }

// String 

// let str = "Pathi";
// let length = str.length;
// console.log("length =",length); // to get length of string
// console.log("str[0] :",str[0]); // to get char throw its index number

//Template Literals
let speicalString = `This is a template literal ${1+2+3}`;
console.log(speicalString);

let obj = {
    item : "pen",
    price : 10,
};

console.log("the cost of ",obj.item, " is ",obj.price, "rupess");
console.log(`the cose of ${obj.item} is ${obj.price} rupess`); // by using template literal 
//${obj.price} // string interpolation

// escape character(\n)(break line into new line)
console.log("Purna\nChander");
// to get tap space
console.log("Purna\tChander");
// if you try to get length of above console \t and \n will be one char \\13

//String Methods // in methods it will not change original string 
let str = "   PurnaChander   ";
let str1;
//UpperCase
console.log("UpperCase",str.toUpperCase());
//LowerCase
console.log("LowerCase",str.toLowerCase());
//trim
console.log("strLength",str.length); // 18
str1 = str.trim();
console.log("strLength after trim",str1.length); //13
//slice
let str2 ="PurnaChander";
let str3 = str2.slice(3,5) // returns part of string( here we tried to get slice(3,5) but 5th char will not include)
console.log("slice",str3);

//str1.concat(str2) joins str2 with str1
//here str = str1 + str2; // this will also work
// if you try to concat integer with String integer will add to String and show in output as String output

//str.replace(searchVal, newVal)
let str4 = "Hello every one";
let str5 = str4.replace("Hello","Hi"); // this is be done for Char's in String also not only words
console.log(str5); // "Hi every one"

//str.charAt(idx);
console.log(str2.charAt(0)); //P











