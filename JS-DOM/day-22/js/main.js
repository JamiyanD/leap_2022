 function add(x, y){
    return x + y;
 }
 function print(f){
    let x = 2;
    let y = 3;
    console.log(f(x, y));
 }
 print(add);


 setTimeout(() =>{ console.log("hha")}, 2000);