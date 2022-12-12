
console.log(document.getElementById("aimag-101").innerHTML)
console.log(document.getElementById("aimag-522"));
console.log(document.getElementById("aimag-315").innerHTML)

document.getElementById("aimag-101").style = "font-size : 20px; background-color : orange; ";
document.getElementById("aimag-103").style = "font-family : arial";
document.getElementById("aimag-104").style = "color : green; margin : 20px;";
document.getElementById("aimag-202").style = "border : 1px solid black; padding : 10px;"

const liLength = document.getElementById("aimagNames").getElementsByTagName('li').length;
console.log(document.getElementById("aimagNames").getElementsByTagName('li')[liLength - 1].innerHTML);

console.log(document.getElementsByTagName("span")[0].innerHTML = "ggggg")

for(i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-1")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: aqua;"
    }
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-2")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: blue;"
    }
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-3")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: brown;"
    }
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-4")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: grey;"
    }
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-5")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: green;"
    }
}


console.log(document.querySelector("#aimagNames"));
console.log(document.querySelector(".dummy"));

console.log(document.getElementsByClassName("dummy"));
console.log(document.querySelectorAll(".dummy"));

document.querySelector("#aimag-101").innerHTML = "Date : " + Date();
document.querySelector("img").src = "./img/pistons.png";


const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent); // dotor n hiihiig helne 
const main = document.getElementsByTagName("body");
main[0].appendChild(newDiv);