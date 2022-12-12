
// document.getElementById("helloText").innerHTML = "Hello World!";
// document.getElementsByClassName("dummy")[0].innerHTML = "Hello Dummy";
// console.log(document.getElementsByClassName("dummy")[1]);


let img = document.getElementById("image").src = "./img/grey.jpg";
console.log(img);
function changeImg(){
    if(img ){
        img.style = "margin: 50px;"
    }
}
let button = document.getElementById("button");
console.log(button);
button.addEventListener("click", changeImg);