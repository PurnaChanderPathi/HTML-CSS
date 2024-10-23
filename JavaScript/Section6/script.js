//Document Object Model
// console.dir(document.body); 

//DOM Manipulation

// selecting with id

// let header = document.getElementById("heading");
// console.dir(header);

// selecting with className

// let headers = document.getElementsByClassName("heading");
// console.dir(headers);
// console.log(headers);

//select with Tagname

// let paragraph = document.getElementsByTagName("p");
// console.dir(paragraph);

// Query Selector
// document.querySelector("myId/myClass/tag");
 // return first element

//  let firstElement = document.querySelector("p");
//  console.dir(firstElement);

// document.querySelectorAll("myId/myClass/tag");
// //return a nodeList

// let firstElement = document.querySelectorAll("p");
// console.dir(firstElement);

//properties 
// tagName :- returns tag for element nodes 
//innerText :- returns the text content of the element and all its children
//innerHTML :- returns the plain text 0r HTML contents in the element
//textContent :- returns textual content even for hidden elements

// console.log(document.body.firstChild);

//innerText
// let div = document.querySelector("div");
// console.log(div);
// in console try to hit div.innerText;

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText+"from apna collage students";
// console.dir(h2.innerText);

// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for(div of divs){
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }

//attributes
// getAttribute(attr) // to get the attribute value
// setAttribute(attr,value) //to set the attribute val th

//style
// Node.style 

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","newClass"));

// let div = document.querySelector("div");
// console.log(div);
// div.style.backgroundColor = "Green";
// div.style.fontSize = "26px";
// div.innerText = "hello!";

// DOM Manupulations 
// insert elements 
// let el = document.createElement("div"); 
// node.append(el) // adds at the end(inside) 
// node.prepend(el) // adds at the start of the code(inside) 
// node.before(el) // adds before the node (outside)
// node.after(el) // adds after the node (outside)
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me..!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn); // adds button at the end of div 
// div.prepend(newBtn); // addes button at the start of the div
// div.before(newBtn); // adds before div
// div.after(newBtn); // adds after div 

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, i am new!</i>";
// document.querySelector("body").prepend(newHeading);


// Delete Element
// node.remove() // removes the node
// let para = document.querySelector("p");
// para.remove();

// prac
let newBtn = document.createElement("button");
newBtn.innerText = "click me";

newBtn.style.color = "whilte";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

//Q2
let para = document.querySelector("p");






