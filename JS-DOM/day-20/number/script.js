let inputNumber = document.getElementsByClassName("guess")[0];
console.log(inputNumber);
function inputFunc(){
    if(inputNumber > 20){
      inputNumber ="0 ees 20 iin hoorond too oruulna uu";
    }
    inputNumber.style = "background-color : #60b347";

}
let check = document.getElementsByClassName("check")[0];
console.log(check);
check.addEventListener("click", inputFunc);