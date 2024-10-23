// question1 

// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log("i :",i);
//     }
// }

// question 2 
let gameNum = 35;
let userNum = prompt("Guess the game number :");

while(userNum != gameNum){
userNum = prompt("you enter wrong number, guess again :");
}
console.log("Congrts you enter the correct number");