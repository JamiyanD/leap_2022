

// function findMax(x, y){
// if(x < y){
//     console.log(y + ` is bigger than ` + x);
// } else{
//     console.log(x + ` is bigger than ` + y);
// }
// }
// findMax(5, 6);

let array = [1, 2, 3, 4, 5, 6, 6, 5];
let a = 7;
function findNumber(){
    for(i = 0; i < array.length; i++){
        if(array[i] == a){
           return a + ' davhardsan baina'
        } else{
            return -1
        }
    }
}
console.log(findNumber());

let min = 10;
let max = 20;
function findRandom(){
        return Math.ceil(Math.random() * (max - min) + min )
}
console.log(findRandom());


let b = 0;
function medium(b){
    for(i = 0; i < array.length; i++){
        b = b + array[i]
    }
    return b / array.length
}
console.log(medium(b))
  


let c = 29;
let primeNumber = true;
function prime(){

    for(i = 2; i < c; i++){
        if(c % i === 0){
            primeNumber = false;
        } 
    }
    if(primeNumber){
        return `it is prime`
    } else{
        return `it is not prime`
    }

}
console.log(prime(c));



let j = `Jamiyan`;
function jaya(){
    return j.toUpperCase();
}
console.log(jaya());


// let x = 27000;


// function restaurant(x){


// if(x >= 5000 &&  x <= 30000){
//    return x = x * 1.15;
  

// } else{
//     return  x = x * 1.2;
// }
// }
// console.log(restaurant(x));

const tip1 = 3000;
const tip2 = 27500;
const tip3 = 100000;





function mongo(tip1, tip2, tip3){
    
    if(tip1 >= 5000 && tip1 <= 30000){
        return tip1 * 1.15
    } else{
        return tip1 * 1.2
    }
    if(tip2 >= 5000 && tip2 <= 30000){
        return tip2 * 1.15
    } else{
        return tip2 * 1.2
    }
    if(tip3 >= 5000 && tip3 <= 30000){
        return tip3 * 1.15
    } else{
        return tip3 * 1.2
    }
    m = tip1 + tip2 + tip3
    return m

   

}
console.log(mongo(tip1));