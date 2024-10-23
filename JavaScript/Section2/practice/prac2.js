let scores = prompt("Enter your Score");

if(scores >= 90 && scores <= 100){
    console.log("Greade A");
}else if(scores >= 70 && scores <= 89){
    console.log("Greade B");
}else if(scores >= 60 && scores <= 69){
    console.log("Greade C");
}else if(scores >= 50 && scores <= 59){
    console.log("Greade D");
}else if(scores < 50){
    console.log("Greade F");
}else {
    console.log("Please Enter your Marks out of 100");
}