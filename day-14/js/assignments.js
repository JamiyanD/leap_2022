

// let a = prompt("123");
// let count = 0;
// let sum = 0;
// while(count < a.length){
//     //console.log(a.charAt(count));
//     sum = sum + Number(a.charAt(count));
//     count = count + 1;
//     console.log(sum);
// }


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

let N = Number(prompt("give me number"));

for(sum = 0, rem = 0; N > 0; ){
    rem = N % 10
     sum = sum + rem
      N = Math.floor(N / 10)

}
console.log(sum);