let inputNumber = document.getElementsByClassName("guess")[0];

let a = Math.ceil(Math.random()* 20);
console.log(a);
let i = 1;
let j = 1;

function inputFunc(){
    if(inputNumber.value > 20 ){
      document.getElementsByClassName("message")[0].innerHTML = "ih too baina";
    }else if(inputNumber.value < 1){
      document.getElementsByClassName("message")[0].innerHTML = "baga too baina";
    }else if(!Number.isInteger(Number(inputNumber.value))){
      document.getElementsByClassName("message")[0].innerHTML = "buhel too oruulna uu";
    }
   
    if(Number(inputNumber.value) == a){
      document.getElementsByClassName("guess")[0].style ="background-color: #60b347"
      document.getElementsByClassName("message")[0].innerHTML = "zov taalaa";
      document.getElementsByClassName("highscore")[0].innerHTML = j
      j = j + 1;
    }
    if(Number(inputNumber.value) != a){
   
      document.getElementsByClassName("score")[0].innerHTML = 20 - i;
      i = i + 1;
    }
    if(document.getElementsByClassName("score")[0].innerHTML == 17){
      document.getElementsByClassName("message")[0].innerHTML = "ta hojigdloo";
      document.getElementsByClassName("guess")[0].style ="background-color: red"
    }

}
let check = document.getElementsByClassName("check")[0];
check.addEventListener("click", inputFunc);

let again1 = document.getElementsByClassName("again1")[0];
function againFunc(){
  document.getElementsByClassName("score")[0].innerHTML = 20;
}
again1.addEventListener("click", againFunc);



