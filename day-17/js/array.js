


function findAt(arr, index) {
 return arr[index];
}
const array1 = [1, 2, 3, 4, 5];
console.log(findAt(array1, 4));


console.log(array1.at(0));

function arrConcat(arr1, arr2){
    let concatedArray = []
    for(i = 0; i < arr2.length; i++){
        concatedArray.push(arr2[i]);
    }
    for(i = 0; i < arr1.length; i++){
        concatedArray.push(arr1[i]);
    }
    return concatedArray
}
let arrayC1 = [1, 2, 3];
let arrayC2 = [4, 5, 6];
// console.log(arrayC1.concat(arrayC2));

console.log(arrConcat(arrayC1, arrayC2));
console.log(arrConcat(arrayC2, arrayC1));

function arrayElementAdd(arr1, arr2){
    let sum = [];
    for( i = 0; i < arr1.length; i++){
        sum[i] = arr1[i] + arr2[i];
    }
    return sum;
}
console.log(arrayElementAdd(arrayC1, arrayC2));


let arrayIncludes = function (arr, number){
    let found = false;
    for(i = 0; i < arr.length; i++){
        if(number === arr[i]){
            found = true;
            break;
        }

    }
    return found;
}
const arrayInc = [2, 4, 5];
console.log(arrayIncludes(arrayInc, 2));
console.log(arrayIncludes(arrayInc, 5));
console.log(arrayIncludes(arrayInc, 3));

console.log(arrayInc.includes(2));
console.log(arrayInc.includes(5));
console.log(arrayInc.includes(3));


let findIndex = function(arr, number){
    let index = -1;
    for(i= 0; i < arr.length; i++){
        if(number === arr[i]){
            index = i;
        }
    }
    return index;
}
const arrIndex = [1, 2, 3];
console.log(findIndex(arrIndex, 2));
console.log(findIndex(arrIndex, 10));
console.log(arrIndex.indexOf(2));
console.log(arrIndex.indexOf(10));


let funcJoin = (arr) => {
    let output = ``;
    for(i = 0; i <arr.length; i++){
        output = output + arr[i];
    }
    return output;
}
const arrayJoin = [1, 2, 3];

console.log(funcJoin(arrayJoin));
const jiguurten = [`Elee`, `heree`, `galuu`];
console.log(jiguurten.join());
console.log(jiguurten.join(''));

const pops = [1, 2, 3,4 ,8];
let popFunc = (arr) => {
   
    const lastIndex = arr.length - 1;
    let poppedArrray = []
    for(i = 0; i < arr.length; i++){
        if(i != lastIndex){
            poppedArrray.push(arr[i]);
        }
    }
    return poppedArrray
}
console.log(popFunc(pops))

const popArrayResult = [1, 2, 3,4 ,8];

popArrayResult.pop()
console.log(popArrayResult);
