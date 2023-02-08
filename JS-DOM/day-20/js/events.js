let myButton = document.getElementById("myButton");
let color = "green";

function changeColors() {
  if (color == "green") {
    myButton.style = `background-color: ${color}`;
    color = "white";
  } else {
    myButton.style = `background-color: ${color}`;
    color = "green";
  }
}
myButton.addEventListener("click", changeColors);

let registerButton = document.querySelector("#register");
registerButton.disabled = true; // buttong ajillahgui bolgodog

let button = document.getElementById("yourButton");
let p1 = document.getElementById("haha");
let p2 = document.getElementById("hehe");

function pFunc() {
  p2.style = "background-color: yellow;";
  p1.style = "background-color: yellow;";
}
button.addEventListener("click", pFunc);
