

// let a = prompt("123");
// let count = 0;
// let sum = 0;
// while(count < a.length){
//     //console.log(a.charAt(count));
//     sum = sum + Number(a.charAt(count));
//     count = count + 1;
//     console.log(sum);
// }

// let str = "123";
// for(count = 0;count < str.length; count++){
//     sum = str.charAt(count);
//     console.log(sum);
// }

// let N = Number(prompt("give me number"));
// let sum = 0;
// let rem = 0;
// while(N > 0){
//     rem = N % 10;
//     sum = sum + rem;
//     N = Math.floor(N / 10);
// }
// console.log(sum);

// let N = Number(prompt("give me number"));

// for(sum = 0, rem = 0; N > 0; ){
//     rem = N % 10
//      sum = sum + rem
//       N = Math.floor(N / 10)

// }
// console.log(sum);

// let limit = prompt("duriin too oruulna uu");
// let count = 0;
// let sum = 0;
// while(count <= limit){
//     if(count % 2 !== 0){
//         sum = count + sum;
//         console.log(sum);
//     }
//     count = count + 1;
// }

// let a = "289";
// let ex = "";
// for(count = a.length - 1; count >= 0; count--){
//     ex = ex + a.charAt(count);
// }
// console.log(ex);


// let a = prompt("duriin baga too ogno u");
// let b = prompt("duriin ih too ogno uu");

// for(number = a; number <= b; number++){
   

// let isPrime = true;

//  if (number >= 1) {

  
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//         }
//     }
//     if (isPrime) {
//         console.log(number);
//     } 

// }

// }

// let a = prompt("Ta hussen neg toogoo oruulna uu");
// let count = 0;


// while(a !== 0){
//     count  = count + 1;
//     a = Math.floor(a / 10);
// }
// console.log(count);

// var number = Number(prompt("100 dotor hussen N too ogno uu"));
// if(number < 100){
// var x = 0;
// while(x !== number){
//   x = Math.floor((Math.random() * 100) + 1);
//   console.log(x);
// }
// } else{
//     console.log("ogson too buruu bna ");
// }

// var a = "This is STRING";
// var b = "";

// for(count = 0; count < a.length; count++){
    
//     if(a.charAt(count) === a.charAt(count).toUpperCase()){
//         b = b + a.charAt(count).toLowerCase() ;
        
//      }else{
//           b = b + a.charAt(count).toUpperCase() ;
     
//      }
// }
// console.log(b);

let toonii_urvuu;
// let a = "289";
// let ex = "";
// for(count = a.length - 1; count >= 0; count--){
//     ex = ex + a.charAt(count);
// }
// console.log(ex);

let fibonachiin_daraalal;
// let a = Number(prompt("duriin N too oruulna uu"));
// let num1 = 0;
// let num2 = 1;
// let sum = 0;
// for(i = 0; i < a; i++){
//     sum = num1 + num2;
//     num1 = num2;
//     num2 = sum;
//     // console.log(num1);
//     if(num1 < a){
//         console.log(num1);
//     }
// }


let palindromic_number;

// let a = prompt("dsada");
// let ex = "";
// for(count = a.length - 1; count >= 0; count--){
//     ex = ex + a.charAt(count);
// }


// if(ex == a){
//     console.log("true");
// }else{
//     console.log("false");
// }


let randomoor_ogogdson_oldog;
// let b = 1;
// let a = 67;
// while(b >= 0 && b < 100){
    
//     b = Math.ceil(Math.random() * 100) - 1;
//     console.log(b);
//     if(b == a){
//         break;
//     }
    
// }



let x = `12341`;
let sum0 = 0;
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;
console.log(typeof x);
for(i = 0; i < x.length; i++){
    if(x[i] == `0`){
        sum0 = sum0 + 1
    }
}
for(i = 0; i < x.length; i++){
    if(x[i] == `1`){
        sum1 = sum1 + 1
    }
}
for(i = 0; i < x.length; i++){
    if(x[i] == `2`){
        sum2 = sum2 + 1
    }
}
for(i = 0; i < x.length; i++){
    if(x[i] == `3`){
        sum3 = sum3 + 1
    }
}
for(i = 0; i < x.length; i++){
    if(x[i] == `4`){
        sum4 = sum4 + 1
    }
}

console.log(`0 : ${sum0}`)
console.log(`1 : ${sum1}`)
console.log(`2 : ${sum2}`)
console.log(`3 : ${sum3}`)
console.log(`4 : ${sum4}`)