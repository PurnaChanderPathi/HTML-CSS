// by using function
// function findVowels(str){
//     let count =0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char == "u"){
//             count++;
//         }
//     }
//     console.log("num of Vowels in the str :",count);
// }

// // by using arrow function
// const findVowelsInArrowFunction = (str) => {
//     let count =0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char == "u"){
//             count++;
//         }
//     }
//     console.log("num of Vowels in the str :",count);
// }


// for-Each loop practice question

// let str = [1,2,3,4];

//     str.forEach(element => {

//        console.log(element * element);
//     });

//find out marks of student above 90+
    //  let student =[87,93,64,99,86];

    // let filterStudent = student.filter((val) => {
    //     return val > 90;
    // })
    // console.log("Student scored above 90 marks :",filterStudent);


    // ask user to enter nth value then create an array with length n
    // let n = prompt("enter a number");
    // let arr = [];
    // for(let i=1; i<=n; i++){
    //     arr[i-1] = i;
    // }
    // console.log(arr);

    //use redure method to calculate sum of all numbers in an array
    // let sumOf = student.reduce((prev,curr) => {
    //     return prev+curr;
    // })
    // console.log("sumOf",sumOf);


    // use reduce method to calculate product of all numbers in the array
    let student =[1,2,3,4,5];

    let productOf = student.reduce((prev,curr) => {
        return prev*curr;
    });
    console.log("productOf :",productOf);
