// Events :- the change in the state of an object is know as an Event
// Events are fired to notify code of "intresting changes" that may affect code execution.

// Mouse events(click,double click etc.)
// keyboard ecents(keypress, keyup, keydown)
//Form events(submit etc)
// print events & many more

// Event handling in JS
//node.event=()={
 // handle here
//}

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }


// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// };


// if we handle code in inline and javascript then java script code will run 

// Event Object :- it is a speical object that has details about the event
// all event handlers have access to the Event Objects properties and methods

// node.event= (e) => {
    //handle 
    //}

    // let btn1 = document.querySelector("#btn1");

    // btn1.onclick = (evt) => {
    //     console.log(evt);
    //     console.log(evt.type);
    //     console.log(evt.target);
    //     console.log(evt.clientX, evt.clientY);
    // }

    // event listeners

    // node.addEventListener(event,callback);
    //node.removeEventListener(event,callback);

    // note :-  the callback reference should be same to remove

  //  let btn1 = document.querySelector("#btn1");

    // btn1.addEventListener("click", () => {
    //     console.log("button was clicked - handler1");
    // })
    
    // const handler2 = () => {
    //     console.log("button was clicked - handler2");
    // }

    // btn1.addEventListener("click", () => {
    //     console.log("button was clicked - handler3");
    // })

    // btn1.addEventListener("click", () => {
    //     console.log("button was clicked - handler4");
    // })

    // btn1.removeEventListener("click",handler2);

    // prac
    let modeBtn = document.querySelector("#mode");
    let currMode = "light";
    modeBtn.addEventListener("click", () => {
        // console.log("you are trying to change mode"); 
        if(currMode === "light"){
            currMode = "dark";
            // document.querySelector("body").style.backgroundColor = "black";
            document.querySelector("body").classList.add("dark");
            document.querySelector("body").classList.remove("light");
        }else{
            currMode = "light";
            // document.querySelector("body").style.backgroundColor = "white";
            document.querySelector("body").classList.add("light");
            document.querySelector("body").classList.remove("dark");
        }
        console.log(currMode);
    }
)   

let div = document.querySelector("div");
    let divColor = "light";

    div.addEventListener("mouseover", () => {
        if(divColor === "light") {
            divColor = "dark";
            document.querySelector("div").classList.add("dark");
            document.querySelector("div").classList.remove("light");
        }else{
            divColor = "light";
            document.querySelector("div").classList.add("light");
            document.querySelector("div").classList.remove("dark");
        }

    })


