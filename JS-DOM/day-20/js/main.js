
function changeImg() {
    let image = document.getElementById("image");
    image.src = "./img/grey.jpg"
}
document.getElementById("grey").addEventListener("click", changeImg);
function changeImgRed() {
    let image = document.getElementById("image");
    image.src = "./img/red.webp"
}
document.getElementById("red").addEventListener("click", changeImgRed);
function changeImgGreen() {
    let image = document.getElementById("image");
    image.src = "./img/green.jpg"
}
document.getElementById("green").addEventListener("click", changeImgGreen);





function removeItem() {
    let select = document.getElementById("colorSelect");
    select.removeChild(select.firstElementChild)
    // select.remove();
}
document.getElementById("button1").addEventListener("click", removeItem)





function alertBoard() {
    alert((`red \n green \n white \n black`));
}
document.getElementById("button2").addEventListener("click", alertBoard);