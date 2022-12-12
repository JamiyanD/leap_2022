let body = document.getElementById("body");
console.log(body);
let button = document.getElementById("button");
console.log(button);
let color = "green";
function backgroundColor(){
    if(color === "green"){ 
        body.style = `background-color: ${color}`;
        color = "white";
    } else if(color === "white") {
        body.style = `background-color: ${color}`;
        color = "yellow";
    }else if(color === "yellow") {
        color = "pink";
        body.style = `background-color: ${color}`;
    }else if(color === "pink") {
        color = "orange";
        body.style = `background-color: ${color}`;
    }else if(color === "orange") {
        color = "green";
        body.style = `background-color: ${color}`;
    }
}
button.addEventListener("click", backgroundColor);