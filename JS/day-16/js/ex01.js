

// function findMax(x, y){
// if(x < y){
//     console.log(y + ` is bigger than ` + x);
// } else{
//     console.log(x + ` is bigger than ` + y);
// }
// }
// findMax(5, 6);



let firstArray = [1, 2, 3, 4, 5, 6, 6, 5];
console.log(firstArray);

function findNumber(a, array){
    for(i = 0; i < array.length; i++){
        if(array.includes(a)){
           return a + ' davhardsan baina'

        } else{
            return -1
        }
    }
}
console.log(findNumber(6, firstArray));



let min = 10;
let max = 20;
function findRandom(){
        return Math.ceil(Math.random() * (max - min) + min )
}
console.log(findRandom());




let b = 0;
function medium(b, array){
    for(i = 0; i < array.length; i++){
        b = b + array[i]
    }
    return b
}
console.log(medium(b, firstArray))





// let c = 29;
// let primeNumber = true;
// function prime(){

//     for(i = 2; i < c; i++){
//         if(c % i === 0){
//             primeNumber = false;
//         } 
//     }
//     if(primeNumber){
//         return `it is prime`
//     } else{
//         return `it is not prime`
//     }

// }
// console.log(prime(c));



// let j = `Jamiyan`;
// function jaya(){
//     return j.toUpperCase();
// }
// console.log(jaya());


let ogogdson_2tooni_hoorondoh_tegsh_toog_oloh;
// function evenNumbers (a, b){
//     if (Math.min(a , b) % 2 == 0){
//         let i = Math.min(a, b)
//        while(i <= Math.max(a, b)){
//         console.log(i);
//         i = i + 2;
//        }
//     } else {
//         let i = Math.min(a, b) + 1;
//         while(i <= Math.max(a, b)){
//          console.log(i);
//          i = i + 2;
//         }
//     }
// }
// evenNumbers(11, 20);




let hoolni_tipnii_bodlogo
// const tip1 = 3000;
// const tip2 = 27500;
// const tip3 = 100000;

// function restaurant(x) {

//     if (x >= 5000 && x <= 30000) {
//         return x = x * 1.15;


//     } else {
//         return x = x * 1.2;
//     }
// }
// console.log(restaurant(tip1));
// console.log(restaurant(tip2));
// console.log(restaurant(tip3));




// let tip = [3000, 27500, 100000];

// function mongo(array) {
//     let sum = 0;
//     for (i = 0; i < array.length; i++) {
//         if (array[i] >= 5000 && array[i] <= 30000) {
//             array[i] = array[i] * 1.15
//         } else {
//             array[i] = array[i] * 1.2
//         }
//       sum = sum + array[i];

//     }
    
//     return sum / array.length;
// }
// console.log(mongo(tip));

arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20];
arr.sort();
console.log(arr);