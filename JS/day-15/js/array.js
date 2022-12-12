
// n too oruulahad tuhaiin n toond heden shig 0-9 tsifr orsniig tsuvuulj gargah

let a = 11111111111;
let count = 0;
for(i = 0; i < 10; i++){
    // console.log(i);
    while(count < 4){
    if(a % 10 == i){
        console.log(i + ` : 1` );
    } else{
        console.log(`sda`);
    }
    a = Math.floor(a / 10);
    count = count + 1;
    
    }
    console.log(i)
  
}
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