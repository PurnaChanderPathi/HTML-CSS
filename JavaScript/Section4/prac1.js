let student = [85,97,44,37,76,60];
let sum = 0;
let avg = 0;
for(let i=0; i<student.length;i++){
    sum+=student[i];
    avg++;
}
console.log("sum :",sum);
console.log("avg : ",avg);
console.log("Sum of avg :",sum/avg);