console.log(window);
window.alert("hello");
window.open('https://google.com', 'Hello');
let result1 = window.confirm("Do you want to Quit");  //approve hih songoltig gargadag
console.log(result1);
let result = confirm("Ta ustgahdaa itgeltei bna uu?");
let message = result ? "Ta OK tovchiig darlaa" : "Ta CANCEL tovchiig darlaa" ;
alert(message);




let alertButton = document.getElementById("alertButton");
let cancelButton = document.getElementById("cancelButton");
let timeoutID;
alertButton.addEventListener("click", () => {
   timeoutID = setTimeout(alert, 3000);
});
cancelButton.addEventListener("click", () => {
    console.log(timeoutID);
    window.clearTimeout(timeoutID);
 });




function runTimerInterval () {
   setInterval(startInterval, 1000);
}
function startInterval(){
    let now = new Date();
    let myTimer = document.getElementById("myTimer").innerHTML = now ;
}
button = document.getElementById("button");
button.addEventListener("click", runTimerInterval);
