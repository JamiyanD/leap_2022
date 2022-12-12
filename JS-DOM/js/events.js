let myButton = document.getElementById("myButton");
console.log(myButton);
let color = "green";
function changeBackgroundColorGreen () {
    myButton.style = "background-color: green"
}
function changeBackgroundColorWhite () {
    myButton.style = "background-color: white"
}
function changeColors(){
    console.log("clicked");
    if(color === "green"){ 
        myButton.style = `background-color: ${color}`;
        color = "white";
    } else {
        myButton.style = `background-color: ${color}`;
        color = "green";
    }
}

myButton.addEventListener("click", changeColors);


let arrowFunc = () => {

}

myButton.addEventListener("click", () => {   // arrow function-g shuud enchenen bichij bolno
    myButton.style = "background-color: red;"
})


let registerButton = document.querySelector("#register");
registerButton.disabled = true; // buttong ajillahgui bolgodog

let button = document.getElementById("yourButton");
let p1 = document.getElementById("haha");
console.log(p1);
let p2 = document.getElementById("hehe");

function pFunc(){
    p1.style = "background-color: red;"
    p2.style = "background-color: yellow;"
}
button.addEventListener("click", pFunc)